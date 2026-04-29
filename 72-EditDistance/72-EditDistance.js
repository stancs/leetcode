// Last updated: 4/29/2026, 10:35:15 AM
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const memo = new Array(m+1).fill(null).map(() => new Array(n+1).fill(undefined));
    console.log(memo);
    
    const dp = (pos1, pos2) => {
        console.log(`pos1: ${pos1}, pos2: ${pos2}`)
        if(pos1 === 0) {
            return pos2;
        }
        if(pos2 === 0) {
            return pos1;
        }
        if(memo[pos1][pos2] !== undefined) {
            console.log(`found it: memo[${pos1}][${pos2}]`)
            return memo[pos1][pos2];
        }
        let min = 0;
        if(word1[pos1-1] === word2[pos2-1]) {
            console.log(`matching!`)
            min = dp(pos1-1, pos2-1);
        } else {
            const insertOp = dp(pos1, pos2-1);
            const deleteOp = dp(pos1-1, pos2);
            const replaceOp = dp(pos1-1, pos2-1);
            console.log(`insertOp: ${insertOp}, deleteOp: ${deleteOp}, replaceOp: ${replaceOp}`)
            min = Math.min(insertOp, deleteOp, replaceOp) + 1;
        }
        memo[pos1][pos2] = min;
        return memo[pos1][pos2];
    }
    
    return dp(m, n);
};