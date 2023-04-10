function partial<T>(fn: Function, ..._args: T[]) {
    return function (...args: T[]) {
        const argsArray = [..._args];
        let arg = 0;
        for (let i = 0; i < argsArray.length && arg < args.length; i++) {
            if (argsArray[i] === undefined) {
                argsArray[i] = args[arg++];
            }
        }
        return fn.apply(this, argsArray);
    };
};

export default partial;
