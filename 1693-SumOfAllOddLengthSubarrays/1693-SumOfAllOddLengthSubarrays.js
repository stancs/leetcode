// Last updated: 4/29/2026, 10:23:11 AM
/**
 * @param {number[]} arr
 * @return {number}
 */
// 2020-11-01
// O(n^3) time | O(1) space
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if((j - i) % 2 === 0) {
                for(let k = i; k <= j; k++) {
                    sum += arr[k];
                }            
            }
        }
    }
    return sum;
};



// 2020-11-01
// 40:00s
// ?
// var sumOddLengthSubarrays = function(arr) {
//     const sum = helper([], arr, 0);
//     return sum;
// };

// function helper(curr, list, sum) {
//     let totalSum = sum;
//     if(curr.length === 0) {
//         for(let i = 0; i < list.length; i++) {
//             const newCurr = [list[i]];
//             const newList = list.slice(i+1);
//             const newSum = list[i] + sum;
//             totalSum += helper(newCurr, newList, newSum);
//             // console.log(`helper(${newCurr}, ${newList}, ${newList}`);
//         }
//     } else if(list.length >= 2) {
//         const newCurr = curr.concat(list.slice(0, 2));
//         const newList = list.slice(2);
//         const newSum = list[0] + list[1] + sum;
//         totalSum += helper(newCurr, newList, newSum);
//         // console.log(`helper(${newCurr}, ${newList}, ${newList}`);
//     }
//     return totalSum;
// }