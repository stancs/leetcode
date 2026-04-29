// Last updated: 4/29/2026, 10:24:57 AM
/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const hash = {};
    for(let i = 0; i < mapping.length; i++) {
        hash[i] = mapping[i];
    }
    // console.log(hash);
    const calculate = val => {
        const str = val.toString();
        const arr = str.split('');
        const convertStr = arr.map(ch => hash[ch]).join('');
        const retVal = parseInt(convertStr);
        return retVal;
    }

    const nums2 = nums.map(num => [num, calculate(num)]);
    nums2.sort((a, b) => a[1] - b[1]);
    return nums2.map(tuple => tuple[0]);
};

// var sortJumbled = function(mapping, nums) {
//     const calculate = (val) => {
//         let str = String(val);
//         let mappedStr = '';
//         for (let i = 0; i < str.length; i++) {
//             mappedStr += mapping[parseInt(str[i])];
//         }
//         return parseInt(mappedStr, 10);
//     }

//     // Create an array of tuples: [mappedValue, originalValue]
//     const mappedNums = nums.map(num => [calculate(num), num]);

//     // Sort based on the mapped values
//     mappedNums.sort((a, b) => a[0] - b[0]);

//     // Extract and return the original numbers in sorted order
//     return mappedNums.map(tuple => tuple[1]);
// };