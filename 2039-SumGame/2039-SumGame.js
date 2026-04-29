// Last updated: 4/29/2026, 10:22:14 AM
/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    const n = num.length;
    const half = n / 2;
    
    let [cnt1, cnt2, s1, s2] = [0, 0, 0, 0];
    for(let i = 0; i < half; i++) {
        if(num[i] === '?') {
            cnt1++;
        } else {
            s1 += parseInt(num[i]);
        }
    }
    
    for(let i = half; i < n; i++) {
        if(num[i] === '?') {
            cnt2++;
        } else {
            s2 += parseInt(num[i]);
        }
    }
    
    // Alice win: cnt1 + cnt2 is odd
    //
    
    return ((cnt1 + cnt2) % 2 === 1) || (2*(s1 - s2) !== 9 * (cnt2 - cnt1));
};