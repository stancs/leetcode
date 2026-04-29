// Last updated: 4/29/2026, 10:19:01 AM
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const map = {};
    for(const ch of word) {
        if(map[ch] === undefined) {
            map[ch] = 0;
        }
        map[ch]++;
    }
    console.log(map);

    const sorted = Object.entries(map).sort((a, b) => b[1]-a[1]);
    console.log(sorted);
    let hits = 1;
    let count = 0;
    for(let i = 0; i < sorted.length; i++) {
        count += sorted[i][1] * hits;
        if((i+1) % 8 === 0) {
            hits = Math.floor((i+1) / 8) + 1;
        }
    }
    return count;
};