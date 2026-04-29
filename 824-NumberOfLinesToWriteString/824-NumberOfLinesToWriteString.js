// Last updated: 4/29/2026, 10:27:29 AM
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    
    const map = {};
    for(let i = 0; i < widths.length; i++) {
        const ch = alpha[i];
        const width = widths[i];
        map[ch] = width;
    }
    // console.log(map);
    
    let lineCount = 1;
    let lineCharCount = 0;
    for(const ch of s) {
        const charCount = map[ch];
        if(charCount + lineCharCount <= 100) {
            lineCharCount += charCount;
        } else {
            lineCount++;
            lineCharCount = charCount;
        }
    }
    return [lineCount, lineCharCount];
};