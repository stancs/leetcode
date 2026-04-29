// Last updated: 4/29/2026, 10:28:52 AM
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    // change num to an array of digits
    const arr = num.toString().split('').map(ch => parseInt(ch));
    console.log(arr);
    let count;
    let maxNum = num;
    for(let i = 0; i < arr.length-1; i++) {
        const n1 = arr[i];
        let idx;
        for(let j = i+1; j < arr.length; j++) {
            const n2 = arr[j];
            if(n1 < n2) {
                idx = j;
                const arr2 = arr.slice();
                arr2[i] = n2;
                arr2[idx] = n1;
                const num2 = parseInt(arr2.map(i => i.toString()).join(''));
                if(maxNum < num2) {
                    maxNum = num2;
                }
            }
        }
    }
    return maxNum;
};