// Last updated: 4/29/2026, 10:21:46 AM
/**
 * @param {string} s
 * @return {boolean}
 */
// 11:54s
// Time O(n)
// Space O(n)
var areNumbersAscending = function(s) {
    const arr = s.split(' ');
    console.log(`arr: ${arr}`);
    const numbers = arr.filter(token => isFinite(parseInt(token))).map(token => parseInt(token));
    console.log(`numbers: ${numbers}`);
    let prev;
    for(let i = 0; i < numbers.length; i++) {
        const curr = numbers[i];
        if(prev !== undefined) {
            if(prev >= curr) {
                console.log(`prev: ${prev}, curr: ${curr}`)
                return false;
            }
        }
        prev = curr;
    }
    return true;
};