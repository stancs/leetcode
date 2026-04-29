// Last updated: 4/29/2026, 10:26:24 AM
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
// 180:00s
// O(W), where W = 365 time | O(W) space
var mincostTickets = function(days, costs) {
    const dayHash = {};
    for(const day of days) {
        dayHash[day] = true;
    }
    const dp = new Array(366).fill(undefined);
    return getDp(1, dp, costs, dayHash);
};

function getDp(i, dp, costs, dayHash) {
    if(i > 365) {
        return 0;
    }
    if(dp[i] !== undefined) {
        return dp[i];
    }
    
    let res;
    if(dayHash[i]) {
        res = Math.min(getDp(i+1, dp, costs, dayHash) + costs[0], getDp(i+7, dp, costs, dayHash) + costs[1], getDp(i+30, dp, costs, dayHash) + costs[2]);
    } else {
        res = getDp(i+1, dp, costs, dayHash);
    }
    dp[i] = res;
    return res;
}