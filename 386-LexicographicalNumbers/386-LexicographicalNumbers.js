// Last updated: 4/29/2026, 10:30:40 AM
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const numArr = [];
    for(let i = 1; i <= n; i++) {
        numArr.push(i);
    }
    const strArr = numArr.map(i => i.toString());
    const sorted = strArr.sort();
    console.log(sorted);
    return sorted.map(str => parseInt(str));
};

var lexicalOrder = function(n) {
    const res = [];
    let curr = 1;
    for(let i = 0; i < n; i++) {
        console.log(`curr: ${curr}`)
        res.push(curr);
        if(curr * 10 <= n) {
            curr *= 10;
        } else {
            while(curr % 10 === 9 || curr + 1 > n) {
                curr = Math.floor(curr / 10);
            }
            curr++;
        }
    }
    console.log(res);
    return res;
}