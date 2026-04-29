// Last updated: 4/29/2026, 10:19:10 AM
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj) && obj.length === 0) {
        return true;
    } else if(typeof obj === 'object' && obj !== null && Object.keys(obj).length === 0) {
        return true;
    }
    return false;
};