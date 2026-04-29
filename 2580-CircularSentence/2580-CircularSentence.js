// Last updated: 4/29/2026, 10:20:07 AM
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const l = sentence.split(' ');
    const n = l.length;
    console.log(l);
    const nextIdx = i => {
        return (i + 1) % n;
    }
    for(let i = 0; i < n; i++) {
        const curr = l[i];
        // console.log(`curr: ${i}, next: ${nextIdx(i)}`)
        const next = l[nextIdx(i)];
        // console.log(curr);
        // console.log(next);
        if(curr[curr.length - 1] !== next[0]) {
            return false;
        }
    }
    return true;
};