// Last updated: 4/29/2026, 10:20:29 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var makePalindrome = function(s) {
    const n = s.length;
    const mid = Math.floor(n / 2);
    let i = 0;
    let count = 0;
    let j = n - 1;
    while(i <= j) {
        console.log(`i:${i}, j:${j}`)
        if(s[i] !== s[j]) {
            if(count > 1) {
                return false;
            }
            count++;
            console.log(`count: ${count}`)
        }
        i++;
        j = n - 1 - i;
    }
    return true;
};