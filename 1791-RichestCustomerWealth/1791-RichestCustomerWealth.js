// Last updated: 4/29/2026, 10:22:49 AM
/**
 * @param {number[][]} accounts
 * @return {number}
 */
// 2:52s
// O(nxm)
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    const row = accounts.length;
    const col = accounts[0].length;
    for(let i = 0; i < row; i++) {
        let sum = 0;
        for(let j = 0; j < col; j++) {
            sum += accounts[i][j];
        }
        if(sum > maxWealth) {
            maxWealth = sum;
        }
    }
    return maxWealth;
};