// Last updated: 4/29/2026, 10:25:02 AM
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const isParenthese = ch => '()'.includes(ch);
    const buf1 = [];
    let buf2 = [];
    for(const ch of s) {
        console.log(`ch: ${ch}`)
        if(ch === ')') {
            let top = buf1.pop();
            while(top !== '(') {
                buf2.push(top);
                top = buf1.pop();
            }
            buf1.push(...buf2);
            buf2 = [];
        } else {
            buf1.push(ch);
        }
        console.log(`buf1: ${buf1}`)
    }
    return buf1.join('');
};