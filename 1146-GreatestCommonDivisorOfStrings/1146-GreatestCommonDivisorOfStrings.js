// Last updated: 4/29/2026, 10:25:41 AM
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const n1 = str1.length;
    const n2 = str2.length;
    const half2 = Math.floor(n2 / 2);
    let gcd = '';
    let i = 1;
    for(let i = 1; i <= n2; i++) {
        const candidate = str2.slice(0, i);
        if(n2 % i === 0 && n1 % i === 0) {
            const q1 = n1 / i;
            const q2 = n2 / i;
            if(candidate.repeat(q2) === str2 && candidate.repeat(q1) === str1) {
                gcd = candidate;
            }
        }
    }
    return gcd;
};