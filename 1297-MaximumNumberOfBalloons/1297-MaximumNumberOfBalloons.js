// Last updated: 4/29/2026, 10:25:03 AM
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = {};
    for(const ch of text) {
        if(map[ch] === undefined) {
            map[ch] = 1;
        } else {
            map[ch]++;
        }
    }
    let count = 0;
    while(true) {
        for(const ch of 'balloon') {
            if(map[ch] === undefined || map[ch] <= 0) {
                return count;
            }
            map[ch]--;
        }
        count++;
    }
};