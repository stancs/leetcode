// Last updated: 4/29/2026, 10:22:38 AM
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0;
    let height = 0;
    for(const eachGain of gain) {
        height += eachGain;
        if(height > highest) {
            highest = height;
        }
    }
    return highest;
};