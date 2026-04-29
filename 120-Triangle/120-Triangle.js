// Last updated: 4/29/2026, 10:34:25 AM
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = [];
    for(const arr of triangle) {
        const n = arr.length;
        if(n === 1) {
            dp.push([...arr]);
        } else {
            const dpArr = new Array(n).fill(Infinity);
            for(let i = 0; i < n-1; i++) {
                dpArr[i] = Math.min(dpArr[i], dp[n-2][i] + triangle[n-1][i]);
                dpArr[i+1] = Math.min(dpArr[i+1], dp[n-2][i] + triangle[n-1][i+1]);
            }
            dp.push(dpArr);
        }
        console.log(dp);
    }
    const lastDp = dp[dp.length - 1];
    console.log(lastDp);
    return Math.min(...lastDp);
};