// Last updated: 4/29/2026, 10:28:05 AM
/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function(words, s) {
    const len = s.length;
    const bold = new Array(len).fill(false);

    for(const word of words) {
        let start = s.indexOf(word);
        while(start !== -1) {
            for(let i = start; i < start + word.length; i++) {
                bold[i] = true;
            }
            start = s.indexOf(word, start + 1);
        }
    }

    let res = '';
    let i = 0;
    while(i < len) {
        if(bold[i]) {
            res += '<b>';
            while(i < len && bold[i]) {
                res += s[i];
                i++;
            }
            res += '</b>';
        } else {
            res += s[i];
            i++;
        }
    }
    return res;
};