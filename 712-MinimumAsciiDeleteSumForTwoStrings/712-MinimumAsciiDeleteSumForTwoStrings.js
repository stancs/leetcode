// Last updated: 4/29/2026, 10:28:32 AM
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    // lowest ASCII sum => delete as many 
    // find the longest common string
    const m = s1.length;
    const n = s2.length;
    const memo = new Array(m+1).fill(undefined).map(() => new Array(n+1).fill(undefined));
    console.log(memo);
    const lcs = (i, j) => {
        if(i === 0 || j === 0) {
            return 0;
        }
        if(memo[i][j] !== undefined) {
            return memo[i][j];
        }
        if(s1[i-1] === s2[j-1]) {
            return s1[i-1].charCodeAt(0) + lcs(i-1, j-1);
        } else {
            memo[i][j] = Math.max(lcs(i-1, j), lcs(i, j-1));
            return memo[i][j];
        }
    }
    const asciiLcs = lcs(m, n);

    const getCharSum = str => {
        let sum = 0;
        for(let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }
        return sum;
    }

    const sum1 = getCharSum(s1);
    const sum2 = getCharSum(s2);
    console.log(`sum1: ${sum1}, sum2: ${sum2}, lcs: ${asciiLcs}`)
    return sum1 + sum2 - 2*asciiLcs;
    
    
//     const lcs = (i, j) => {
//         console.log(`i: ${i}, j: ${j}`)
//         if(i === 0 && j === 0) {
//             return 0;
//         } else if(i === 0) {
//             let sum = 0;
//             for(let k = 0; k <= j; k++) {
//                 sum += s2.charCodeAt(k);
//             }
//             return sum;
//         } else if(j === 0) {
//             let sum = 0;
//             for(let k = 0; k <= i; k++) {
//                 sum += s1.charCodeAt(k);
//             }
//             return sum;
//         }
//         if(memo[i][j] !== undefined) {
//             return memo[i][j];
//         }
//         const c1 = s1[i-1];
//         const val1 = c1.charCodeAt(0);
//         const c2 = s2[j-1];
//         const val2 = c2.charCodeAt(0);
//         console.log(`c1: ${c1}, ASCII: ${val1}`)
//         console.log(`c2: ${c2}, ASCII: ${val2}`)
        
//         if(c1 === c2) {
//             return lcs(i-1, j-1);
//         }
//         memo[i][j] = Math.min(val1 + lcs(i-1, j), val2 + lcs(i, j-1));
//         return memo[i][j];
//     }
//     const getCharSum = str => {
//         let sum = 0;
//         for(let i = 0; i < str.length; i++) {
//             sum += str.charCodeAt(i);
//         }
//         return sum;
//     }
    
//     const lcsMaxSum = lcs(m, n);
//     const sum1 = getCharSum(s1);
//     const sum2 = getCharSum(s2);
//     console.log(`sum1: ${sum1}, sum2: ${sum2}, lcsMaxSum: ${lcsMaxSum}`)
//     const res = sum1 + sum2 - 2 * lcsMaxSum;
//     console.log(`result: ${res}`)
//     return res;
    // const lcsMinSum = lcs(m, n);
    // console.log(lcsMinSum);
    // return lcsMinSum;
};