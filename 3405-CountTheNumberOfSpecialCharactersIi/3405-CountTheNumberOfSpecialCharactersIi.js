// Last updated: 5/27/2026, 11:06:54 PM
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const isLower = ch => ch >= 'a' && ch <= 'z';
    const map = {};
    for(const ch of word) {
        const lowerCh = ch.toLowerCase();
        if(isLower(ch)) {
            if(map[lowerCh] >= 2 || map[lowerCh] < 0) {
                map[lowerCh] = -1;
            } else {
                map[lowerCh] = 1;
            }
        } else {
            if(map[lowerCh] === undefined) {
                map[lowerCh] = -1;
            } else if(map[lowerCh] === 1) {
                map[lowerCh] = 3;
            }
        }
    }
    const values = Object.values(map);
    const count = values.filter(value => value === 3).length;
    return count;
};