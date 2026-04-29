// Last updated: 4/29/2026, 10:19:26 AM
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    
    if(Array.isArray(obj)) {
        // const arr2 = obj.filter(item => !!compactObject(item));
        const arr2 = obj.reduce((acc, val) => {
            const res = compactObject(val);
            if(res) {
                acc.push(res);
            }
            return acc;
        }, [])
        return arr2;
    } else if(typeof obj === 'object' && obj !== null) {
        const keys = Object.keys(obj);
        const obj2 = keys.reduce((acc, key) => {
            const val = compactObject(obj[key]);
            if(val) {
                acc[key] = val;
            }
            return acc;
        }, {});
        return obj2;
    } else {
        return obj;
    }
};