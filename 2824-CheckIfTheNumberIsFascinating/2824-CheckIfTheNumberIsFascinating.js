// Last updated: 4/29/2026, 10:19:18 AM
/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    const str = n.toString() + (2*n).toString() + (3*n).toString();
    console.log(str);
    const arr = new Array(10).fill(0);
    console.log(arr);
    for(const ch of str) {
        const digit = parseInt(ch);
        if(digit === 0) {
            return false;
        }
        arr[digit]++;
        if(arr[digit] > 1) {
            return false;
        }
    }
    for(let i = 1; i <= 9; i++) {
        if(arr[i] > 1 || arr[i] === 0) {
            return false;
        }
    }
    return true;
}    