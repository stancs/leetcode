// Last updated: 4/29/2026, 10:24:51 AM
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
// 2022-11-15

var findWinners = function(matches) {
    const loserMap = {};
    for(const [winner, loser] of matches) {
        if(loserMap[loser] === undefined) {
            loserMap[loser] = 1;
        } else {
            loserMap[loser]++;
        }
        if(loserMap[winner] === undefined) {
            loserMap[winner] = 0;
        }
    }
    console.log(loserMap);
    const keys = Object.keys(loserMap);
    const ans1 = keys.filter(key => loserMap[key] === 0).sort((a, b) => a - b);
    const ans2 = keys.filter(key => loserMap[key] === 1).sort((a, b) => a - b);
    return [ans1, ans2];
};