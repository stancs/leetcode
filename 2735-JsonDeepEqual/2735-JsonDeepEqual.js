// Last updated: 4/29/2026, 10:19:42 AM
/**
 * @param {null|boolean|number|string|Array|Object} o1
 * @param {null|boolean|number|string|Array|Object} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    if(o1 === undefined) {
        return o2 === undefined;
    } else if(o1 === null) {
        return o2 === null;
    } else if(Array.isArray(o1)) {
        if(Array.isArray(o2) && o1.length === o2.length) {
            for(let i = 0; i < o1.length; i++) {
                if(!areDeeplyEqual(o1[i], o2[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    } else if(typeof o1 === 'object') {
        if(o2 === null || Array.isArray(o2)) {
            return false;
        } else if(typeof o2 === 'object') {
            const keys1 = Object.keys(o1);
            const keys2 = Object.keys(o2);
            if(keys1.length !== keys2.length) {
                return false;
            }
            for(const key1 of keys1) {
                if(!areDeeplyEqual(o1[key1], o2[key1])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    return o1 === o2;
};