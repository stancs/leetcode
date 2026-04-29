// Last updated: 4/29/2026, 10:19:32 AM
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n === 0) {
        return arr;
    }
    const output = [];
    const flatten = (tmpArr, i) => {
        for(const item of tmpArr) {
            if(Array.isArray(item) && i < n) {
                flatten(item, i+1);
            } else {
                output.push(item);
            }
        }
    }
    flatten(arr, 0);
    return output;
};