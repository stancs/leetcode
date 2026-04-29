// Last updated: 4/29/2026, 10:24:21 AM
/**
 * @param {number} num
 * @return {number}
 */
// 2:48s
// O(n)
var numberOfSteps = function(num) {
    let i = num;
    let steps = 0;
    while(i > 0) {
        if(i % 2 === 0) {
            i = i / 2;
        } else {
            i--;
        }
        steps++;
    }
    return steps;
};