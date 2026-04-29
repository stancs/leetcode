// Last updated: 4/29/2026, 10:20:59 AM
/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    const [h1, m1] = current.split(':');
    const [h2, m2] = correct.split(':');
    
    const val1 = parseInt(h1) * 60 + parseInt(m1);
    const val2 = parseInt(h2) * 60 + parseInt(m2);
    
    console.log(`${val1} => ${val2}`)
    
    let diff = val2 - val1;
    console.log(`diff: ${diff}`)
    
    const mins = [60, 15, 5, 1];
    
    let n = 0;
    for(const min of mins) {
        let q = Math.floor(diff / min);
        diff = diff - q * min;
        n += q;
    }
    return n;
};