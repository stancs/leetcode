// Last updated: 4/29/2026, 10:21:43 AM
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
// T: 3:50s
// TC: O(n)
// SC: O(n)
var countWords = function(words1, words2) {
    const map1 = createMap(words1);
    const map2 = createMap(words2);
    const words3 = words1.length > words2.length? words2: words1;
    let count = 0;
    for(const word of words3) {
        if(map1[word] === 1 && map2[word] === 1) {
            count++;
        }
    }
    return count;
};

function createMap(words) {
    const map = {};
    for(const word of words) {
        if(map[word] === undefined) {
            map[word] = 1;
        } else {
            map[word]++;
        }
    }
    return map;
}