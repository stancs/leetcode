// Last updated: 4/29/2026, 10:24:18 AM
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    const convertToBinary = num => {
        const arr = [];
        let curr = num;
        while(curr !== 0) {
            const remainder = curr % 2;
            arr.push(remainder);
            curr = (curr - remainder) / 2;
        }
        return arr;
    }
    // console.log(convertToBinary(a));
    // console.log(convertToBinary(b));
    // console.log(convertToBinary(c));
    const arr1 = convertToBinary(a);
    const arr2 = convertToBinary(b);
    const arr3 = convertToBinary(c);
    const maxLen = Math.max(arr1.length, arr2.length, arr3.length);
    console.log(`maxLen: ${maxLen}`)
    const fillZeros = arr => {
        while(arr.length < maxLen) {
            arr.push(0);
        }
        return arr;
    }
    fillZeros(arr1);
    fillZeros(arr2);
    fillZeros(arr3);
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    let count = 0;
    for(let i = 0; i < arr3.length; i++) {
        const b1 = i < arr1.length? arr1[i]: 0;
        const b2 = i < arr2.length? arr2[i]: 0;
        const b3 = arr3[i];
        if(b3 === 0) {
            count += b1 + b2;
        } else { // b3 === 1
            // b1 + b2 === 0 => 1
            // b1 + b2 === 1 => 0
            // b1 + b2 === 2 => 0
            if(b1 + b2 === 0) {
                count++;
            }
        }
    }
    return count;
};