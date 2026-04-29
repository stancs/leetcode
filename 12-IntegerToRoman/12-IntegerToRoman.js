// Last updated: 4/29/2026, 10:36:45 AM
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let curr = num;
    const arr = [];
    let i = 0;
    while(curr !== 0) {
        // console.log(`i=${i}`)
        const q = Math.floor(curr / values[i]);
        // console.log(`q=${q}`)
        if(q > 0) {
            for(let p = 0; p < q; p++) {
                arr.push(symbols[i]);
            }
            curr = curr - values[i] * q;
        }
        // console.log(`arr=${arr}`)
        i++;
    }
    const str = arr.join('');
    return str;
};