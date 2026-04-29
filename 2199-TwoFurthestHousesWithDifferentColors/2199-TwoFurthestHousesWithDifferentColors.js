// Last updated: 4/29/2026, 10:21:41 AM
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let max = 0;
    const len = colors.length;
    for(let i = 0; i < len - 1; i++) {
        for(let j = i+1; j < len; j++) {
            if(colors[i] !== colors[j]) {
                const diff = j - i;
                if(diff > max) {
                    max = diff;
                }
            }
        }
    }
    return max;
};