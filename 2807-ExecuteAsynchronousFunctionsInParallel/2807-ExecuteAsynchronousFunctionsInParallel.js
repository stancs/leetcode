// Last updated: 4/29/2026, 10:19:23 AM
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let resolvedCount = 0;

        functions.forEach((fn, index) => {
            fn().then(value => {
                results[index] = value;
                resolvedCount++;

                if(resolvedCount === functions.length) {
                    resolve(results);
                }
            })
            .catch(error => {
                reject(error);
            });
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */