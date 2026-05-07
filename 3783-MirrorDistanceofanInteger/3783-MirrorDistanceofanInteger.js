// Last updated: 5/7/2026, 4:02:49 PM
1/**
2 * @param {number} n
3 * @return {number}
4 */
5var mirrorDistance = function(n) {
6    const reverse = i => {
7        let curr = i;
8        let num = 0;
9        while(curr !== 0) {
10            num *= 10;
11            const r = curr % 10;
12            curr -= r;
13            curr /= 10;
14            num += r;
15        }
16        return num;
17    }
18    const rev = reverse(n);
19    console.log(`n: ${n}, rev: ${rev}`);
20    return Math.abs(n - rev);
21};