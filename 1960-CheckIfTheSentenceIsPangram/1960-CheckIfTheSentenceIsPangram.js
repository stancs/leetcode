// Last updated: 4/29/2026, 10:22:27 AM
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const map = {};
    for(let i = 0; i < alpha.length; i++) {
        const ch = alpha[i];
        map[ch] = i;
    }
    // console.log(map);
    const arr = new Array(26).fill(false);
    for(const ch of sentence) {
        const idx = map[ch];
        arr[idx] = true;
    }
    for(const elmt of arr) {
        if(elmt === false) {
            return false;
        }
    }
    return true;
};