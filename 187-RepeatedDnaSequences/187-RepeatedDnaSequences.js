// Last updated: 4/29/2026, 10:33:15 AM
/**
 * @param {string} s
 * @return {string[]}
 */
// 2022-11-29
// 09:21s
// O(n)
// O(n)
var findRepeatedDnaSequences = function(s) {
    const arr = s.split('');
    const buffer = [];
    const map = {};
    for(let i = 0; i < arr.length; i++) {
        buffer.push(arr[i]);
        // console.log(buffer);
        if(buffer.length > 10) {
            buffer.shift();
        }
        if(buffer.length === 10) {
            const str = buffer.join('');
            if(map[str] === undefined) {
                map[str] = 1;
            } else {
                map[str]++;
            }
        }
    }
    // console.log(map);
    const keys = Object.keys(map);
    return keys.filter(key => map[key] > 1);
};