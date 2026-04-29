// Last updated: 4/29/2026, 10:35:53 AM
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Time: 8:39s
// O(n * n! / (p!* q!)) time | O(n * n! / (p!* q!)) space
var permuteUnique = function(nums) {
    const hash = {};
    const list = [];
    permuteUniqueHelper(nums, [], hash, list);
    return list;
};

function permuteUniqueHelper(array, permutation, hash, list) {
    if(array.length === 0) {
        list.push(permutation);
        return;
    }
    const hash2 = {};
    for(let i = 0; i < array.length; i++) {
        const num = array[i];
        if(!hash2[num]) {
            hash2[num] = true;
        } else {
            continue;
        }
        const newArray = array.slice(0, i).concat(array.slice(i+1));
        const newPermutation = permutation.concat(num);
        permuteUniqueHelper(newArray, newPermutation, hash, list);
    }
}

// function permuteUniqueHelper(array, permutation, hash, list) {
//     if(array.length === 0) {
//         if(permutation.length > 0) {
//             const permutationStr = permutation.join('-');
//             if(!hash[permutationStr]) {
//                 hash[permutationStr] = true;
//                 list.push(permutation);
//             }
//         }
//         return;
//     }
//     for(let i = 0; i < array.length; i++) {
//         const num = array[i];
//         const newArray = array.slice(0, i).concat(array.slice(i+1));
//         const newPermutation = permutation.concat(num);
//         permuteUniqueHelper(newArray, newPermutation, hash, list);
//     }
// }