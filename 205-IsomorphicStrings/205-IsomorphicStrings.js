// Last updated: 4/29/2026, 10:33:02 AM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = {};
    const getFreqStr = str => {
        const map = {};
        const arr = [];
        let count = 1;
        for(const ch of str) {
            if(map[ch] === undefined) {
                map[ch] = count;
                arr.push(count);
                count++;
            } else {
                arr.push(map[ch]);
            }
        }
        // return Object.values(map).sort((a, b) => a - b).join('#');
        return arr.join('#');
    }
    const resA = getFreqStr(s);
    const resB = getFreqStr(t);
    
    console.log(resA);
    console.log(resB);
    return resA == resB;
};