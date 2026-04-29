// Last updated: 4/29/2026, 10:28:11 AM
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    /*
    tc[i] = Math.min(cost[i] + tc[i+1], cost[i] + tc[i+2])
    return Math.min(tc[0], tc[1])
    */
    const map = {};
    const df = i => {
        if(map[i] !== undefined) {
            return map[i];
        }
        if(i >= cost.length) {
            return 0;
        }
        map[i] = Math.min(cost[i] + df(i+1), cost[i] + df(i+2));
        return map[i];
    }
    return Math.min(df(0), df(1));
};