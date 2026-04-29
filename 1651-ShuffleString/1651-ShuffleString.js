// Last updated: 4/29/2026, 10:23:19 AM
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
// 12:00s
// O(n) time | O(n) space
var restoreString = function(s, indices) {
    const newArr = new Array(s.length).fill("X");
    // console.log(newArr);
    for(let i = 0; i < indices.length; i++) {
        newArr[indices[i]] = s[i];
    }
    return newArr.join('');;
};