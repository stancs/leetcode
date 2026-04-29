// Last updated: 4/29/2026, 10:19:33 AM
/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
var promisePool = async function(functions, n) {
    let fnIdx = 0;

    const executeNext = () => {
        if(fnIdx >= functions.length) {
            return Promise.resolve();
        }
        const currFn = functions[fnIdx];
        fnIdx++;
        return currFn().then(executeNext);
    }
    const pool = Array.from({length: n}, executeNext);
    return Promise.all(pool);
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */