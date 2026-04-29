// Last updated: 4/29/2026, 10:19:47 AM
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const map = {};
    return function(...args) {
        const fnName = fn.name;
        const argsStr = args.join('#');
        const key = fnName + '-' + argsStr;
        if(map[key] !== undefined) {
            return map[key];
        } else {
            const output = fn(...args);
            map[key] = output;
            return output;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */