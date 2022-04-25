export interface DebouncedFunction<
  Args extends any[],
  F extends (...args: Args) => any
> {
  (this: ThisParameterType<F>, ...args: Args & Parameters<F>): Promise<
    ReturnType<F>
  >;
}

interface DebouncedPromise<FunctionReturn> {
  resolve: (result: FunctionReturn) => void;
  reject: (reason?: any) => void;
}

export function debounce<Args extends any[], F extends (...args: Args) => any>(
  func: F,
  waitMilliseconds = 50
): DebouncedFunction<Args, F> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  let promises: DebouncedPromise<ReturnType<F>>[] = [];

  function nextInvokeTimeout() {
    return waitMilliseconds;
  }

  const debouncedFunction = function (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    const context = this;
    return new Promise<ReturnType<F>>((resolve, reject) => {
      const invokeFunction = function () {
        timeoutId = undefined;

        const result = func.apply(context, args);
        promises.forEach(({ resolve }) => resolve(result));
        promises = [];
      };

      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(invokeFunction, nextInvokeTimeout());

      promises.push({ resolve, reject });
    });
  };

  return debouncedFunction;
}
