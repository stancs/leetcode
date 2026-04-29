// Last updated: 4/29/2026, 10:24:37 AM
/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    /*
    remain, 3, 3
    max(piles[0] + dp(remain - 1, 2, 3), piles[1] + dp(remain-1, 3, 2))
    if remain == 
    */
    const n = piles.length;
    const memo = new Array(n+1).fill(null).map(() => new Array(k+1).fill(-1));
    const dp = (i, remain) => {
        if(i === n || remain === 0) {
            return 0;
        }
        if(memo[i][remain] !== -1) {
            return memo[i][remain];
        }
        const skip = dp(i+1, remain);
        let take = 0;
        const maxCoin = Math.min(remain, piles[i].length);
        let curr = 0;
        for(let j = 1; j <= maxCoin; j++) {
            curr += piles[i][j-1];
            take = Math.max(take, curr + dp(i+1, remain-j))
        }
        memo[i][remain] = Math.max(skip, take);
        return memo[i][remain];
    }
    
    return dp(0, k);
};