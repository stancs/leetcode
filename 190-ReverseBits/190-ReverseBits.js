// Last updated: 4/29/2026, 10:33:13 AM
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const arr = [];
    let curr = n;
    while(curr > 0) {
        const remainder = curr % 2;
        arr.push(remainder);
        curr = (curr - remainder) / 2;
    }
    console.log(arr);
    while(arr.length < 32) {
        arr.push(0);
    }
    const rev = arr.reverse();
    let output = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        output += arr[i];
        if(i !== 0) {
            output *= 2;
        }
    }
    return output;
};