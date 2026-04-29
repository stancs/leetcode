// Last updated: 4/29/2026, 10:22:23 AM
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    const indexArr = [];
    const arr = num.split('').map(s => parseInt(s));
    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 1) {
            indexArr.push(i);
        }
    }
    console.log(indexArr);
    if(indexArr.length === 0) {
        return '';
    } else {
        const end = indexArr[indexArr.length - 1];
        return num.slice(0, end + 1);
    }
};