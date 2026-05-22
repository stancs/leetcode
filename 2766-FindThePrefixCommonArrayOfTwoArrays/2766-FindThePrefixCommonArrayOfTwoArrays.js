// Last updated: 5/21/2026, 10:02:29 PM
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const len = A.length;
    const map = {};
    const res = [];
    for(let i = 0; i < len; i++) {
        const a = A[i];
        const b = B[i];
        if(map[a] === undefined) {
            map[a] = 1;
        } else {
            map[a]++;
        }
        if(map[b] === undefined) {
            map[b] = -1;
        } else {
            map[b]--;
        }
        const values = Object.values(map);
        console.log(values);
        const count = values.filter(val => val === 0).length;
        res.push(count);
    }
    return res;
};