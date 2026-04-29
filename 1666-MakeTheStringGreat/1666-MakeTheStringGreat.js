// Last updated: 4/29/2026, 10:23:13 AM
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const small = 'abcdefghijklmnopqrstuvwxyz';
    const big =   'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log(small.length);
    console.log(big.length);
    const map = {};
    for(let i = 0; i < 26; i++) {
        const smallCh = small[i];
        const bigCh = big[i];
        map[smallCh] = bigCh;
        map[bigCh] = smallCh;
    }
    const stack = [];
    for(const ch of s) {
        if(stack.length > 0 && stack[stack.length - 1] === map[ch]) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return stack.join('');
};