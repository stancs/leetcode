// Last updated: 4/29/2026, 10:25:42 AM
/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    weight.sort((a, b) => a - b);
    let sum = 0;
    let count = 0;
    for(const w of weight) {
        if(sum + w <= 5000) {
            sum += w;
            count++;
        } else {
            break;
        }
    }
    return count;
};