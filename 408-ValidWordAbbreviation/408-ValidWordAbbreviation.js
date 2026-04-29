// Last updated: 4/29/2026, 10:30:27 AM
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    const isDigit = ch => '1234567890'.includes(ch);
    let prevCh = '';
    let numStr = '';
    let idx = 0;
    for(const ch of abbr) {
        // console.log(`ch: ${ch}`)
        if(isDigit(ch)) {
            numStr += ch;
        } else {
            if(numStr.length > 0) {
                if(numStr.startsWith('0') && numStr.length > 1) {
                    return false;
                }
                const num = parseInt(numStr);
                if(num === 0 && numStr.length > 0) {
                    return false;
                }
                numStr = '';
                idx += num;
            }
            if(word[idx] !== ch) {
                return false;
            }
            idx++;
        }
    }
    if(numStr.length > 0) {
        if(numStr.startsWith('0') && numStr.length > 1) {
            return false;
        }
        const num = parseInt(numStr);
        if(num === 0 && numStr.length > 0) {
            return false;
        }
        numStr = '';
        idx += num;
    }
    if(idx !== word.length) {
        return false;
    }
    return true;
};