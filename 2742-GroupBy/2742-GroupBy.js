// Last updated: 4/29/2026, 10:19:40 AM
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const map = {};
    for(let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        if(map[key] === undefined) {
            map[key] = [ this[i] ];
        } else {
            map[key].push(this[i]);
        }
    }
    return map;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */