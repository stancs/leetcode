// Last updated: 5/13/2026, 12:12:41 AM
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    const reverse = i => {
        let curr = i;
        let num = 0;
        while(curr !== 0) {
            num *= 10;
            const r = curr % 10;
            curr -= r;
            curr /= 10;
            num += r;
        }
        return num;
    }
    const rev = reverse(n);
    console.log(`n: ${n}, rev: ${rev}`);
    return Math.abs(n - rev);
};