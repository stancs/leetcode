// Last updated: 4/29/2026, 10:36:09 AM
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = '1';
    for(let i = 1; i < n; i++) {
        let char = str[0], freq = 0;
        let idx = 0;
        let nextStr = '';
        while(idx < str.length) {
            if(str[idx] !== char) {
                nextStr = nextStr.concat(`${freq}${char}`);
                char = str[idx];
                freq = 1;
            } else {
                freq++;
            }
            idx++;
        }
        nextStr = nextStr.concat(`${freq}${char}`);
        str = nextStr;
        console.log(str);
    }
    return str;
};