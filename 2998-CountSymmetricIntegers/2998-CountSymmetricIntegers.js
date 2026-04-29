// Last updated: 4/29/2026, 10:19:07 AM
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    for(let i = low; i <= high; i++) {
        const str = i.toString();
        const n = str.length;
        if(n % 2 === 0) {
            const half = n / 2;
            const arr = str.split('').map(ch => parseInt(ch));
            let left = 0, right = 0;
            for(let j = 0; j < half; j++) {
                left += arr[j];
            }
            for(let j = half; j < n; j++) {
                right += arr[j];
            }
            if(left === right) {
                console.log(str);
                count++;
            }
        }
    }
    return count;
};