// Last updated: 4/29/2026, 10:30:22 AM
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 2022-11-26
// 40:00s
// O(max(n1, n2))
// O(max(n1, n2))
var addStrings = function(num1, num2) {
    const arr1 = num1.split('').reverse();
    const arr2 = num2.split('').reverse();
    const maxLen = Math.max(num1.length, num2.length);
    console.log(arr1);
    console.log(arr2);
    
    const res = [];
    let carryOver = 0;
    for(let i = 0; i < maxLen; i++) {
        const a = i < arr1.length? parseInt(arr1[i]): 0;
        const b = i < arr2.length? parseInt(arr2[i]): 0;
        const c = a + b + carryOver;
        console.log(`a=${a}, b=${b}, c=${c}`);
        res.push(c % 10)
        carryOver = c >= 10? 1: 0;
    }
    if(carryOver === 1) {
        res.push(1);
    }
    console.log(res);
    return res.reverse().join('');
};