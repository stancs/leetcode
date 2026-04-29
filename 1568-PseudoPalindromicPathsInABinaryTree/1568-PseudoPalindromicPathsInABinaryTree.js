// Last updated: 4/29/2026, 10:23:40 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    let count = 0;
    const freqArr = new Array(10).fill(0);
    const numArr = [];
    const isPseudoPalindromic = arr => {
        let numEven = 0;
        let numOdd = 0;
        let totalFreq = 0;
        for(const freq of arr) {
            totalFreq += freq;
            if(freq % 2 === 0) {
                numEven++;
            } else {
                numOdd++;
            }
        }
        if(totalFreq > 0 && numOdd < 2) {
            return true;
        }
        return false;
    }
//     const dfs = (node, freqArr, numArr) => {
//         const newFreqArr = [...freqArr];
//         newFreqArr[node.val]++;
//         const newNumArr = [...numArr];
//         newNumArr.push(node.val);
        
//         if(!node.left && !node.right) {
//             if(isPseudoPalindromic(newFreqArr)) {
//                 // console.log(newNumArr);
//                 count++;
//             }
//             return;
//         }
        
//         if(node.left) {
//             dfs(node.left, newFreqArr, newNumArr);
//         }
//         if(node.right) {
//             dfs(node.right, newFreqArr, newNumArr);
//         }
        
//     }
//     dfs(root, freqArr, numArr);
    const dfs = (node, freqArr) => {
        const newFreqArr = [...freqArr];
        newFreqArr[node.val]++;
        
        if(!node.left && !node.right) {
            if(isPseudoPalindromic(newFreqArr)) {
                // console.log(newNumArr);
                count++;
            }
            return;
        }
        
        if(node.left) {
            dfs(node.left, newFreqArr);
        }
        if(node.right) {
            dfs(node.right, newFreqArr);
        }
        
    }
    dfs(root, freqArr);
    return count;
};