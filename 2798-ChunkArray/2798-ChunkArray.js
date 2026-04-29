// Last updated: 4/29/2026, 10:19:27 AM
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const output = [];
    for(let i = 0; i < arr.length; i = i + size) {
        const chunk = arr.slice(i, i + size);
        output.push(chunk);
    }
    return output;
};
