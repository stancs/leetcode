// Last updated: 4/29/2026, 10:36:05 AM
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 41:00s
// O(n*m) time | O(n+m) space
var multiply = function(num1, num2) {
    const arr1 = num1.toString().split('');
    const arr2 = num2.toString().split('');
    console.log(arr1);
    console.log(arr2);
    let sum = [0];
    for(let i = arr2.length - 1; i >= 0; i--) {
        const result = multiplyOne(arr1, arr2[i], arr2.length - 1 - i);
        sum = add(sum, result);
    }
    removePrecedingZero(sum);
    return sum.join('');
};

function add(arr1, arr2) {
    let idx1 = arr1.length - 1;
    let idx2 = arr2.length - 1;
    let carry = 0;
    const output = [];
    while(idx1 >= 0 || idx2 >= 0) {
        const num1 = idx1 >= 0? arr1[idx1]: 0;
        const num2 = idx2 >= 0? arr2[idx2]: 0;
        const sum = num1 + num2 + carry;
        output.unshift(sum % 10);
        carry = Math.floor(sum / 10);
        idx1--;
        idx2--;
    }
    if(carry === 1) {
        output.unshift(1);
    }
    return output;
}

function multiplyOne(arr1, num, shift) {
    let carry = 0;
    const output = [];
    for(let i = arr1.length - 1; i >= 0; i--) {
        const result = arr1[i] * num + carry;
        output.unshift(result % 10);
        carry = Math.floor(result / 10);
    }
    if(carry >= 1) {
        output.unshift(carry);
    }
    for(let i = 0; i < shift; i++) {
        output.push(0);
    }
    return output;
}

function removePrecedingZero(sum) {
    while(sum[0] === 0 && sum.length > 1) {
        sum.shift();
    }
}