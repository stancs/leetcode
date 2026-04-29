// Last updated: 4/29/2026, 10:36:43 AM
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const arr = s.split('');
    console.log(arr);
    const map = {
        'I': [1, 1],
        'V': [2, 5],
        'X': [3, 10],
        'L': [4, 50],
        'C': [5, 100],
        'D': [6, 500],
        'M': [7, 1000],
    };
    let prev;
    let sum = 0;
    for(const curr of arr) {
        const [currLevel, currVal] = map[curr];
        sum += currVal;
        if(prev !== undefined) {
            const [prevLevel, prevVal] = map[prev];
            if(prevLevel < currLevel) {
                sum -= 2 * prevVal;
            }
        }
        prev = curr;
    }
    return sum;
};