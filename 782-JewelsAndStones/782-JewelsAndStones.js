// Last updated: 4/29/2026, 10:27:53 AM
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const map = {};
    for(const ch of jewels) {
        map[ch] = true;
    }
    
    let count = 0;
    for(const ch of stones) {
        if(map[ch]) {
            count++;
        }
    }
    return count;
};