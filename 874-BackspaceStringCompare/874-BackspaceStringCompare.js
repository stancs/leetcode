// Last updated: 4/29/2026, 10:27:16 AM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 7:15s
// T O(n)
// S O(n)
var backspaceCompare = function(s, t) {
    const finalStr = str => {
        const arr = [];
        for(const ch of str) {
            if(ch !== '#') {
                arr.push(ch);
            } else {
                arr.pop();
            }
        }
        const res = arr.join('');
        return res;
    }
    const f1 = finalStr(s);
    const f2 = finalStr(t);
    console.log(f1);
    console.log(f2);
    return f1 === f2;
};