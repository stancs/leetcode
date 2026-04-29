// Last updated: 4/29/2026, 10:25:44 AM
/**
 * @param {string} S
 * @return {number}
 */
var countLetters = function(S) {
    let count = 0;
    for(let i = 0; i < S.length; i++) {
        for(let j = i+1; j < S.length+1; j++) {
            const str = S.slice(i, j);
            // console.log(`check: ${str}`)
            if(checkOneDistinct(str)) {
                // console.log(`counted: ${str}`);
                count++;
            }
        }
    }
    return count;
};

function checkOneDistinct(str) {
    for(let i = 1; i < str.length; i++) {
        const char = str[i];
        if(char !== str[0]) {
            return false;
        }
    }
    return true;
}