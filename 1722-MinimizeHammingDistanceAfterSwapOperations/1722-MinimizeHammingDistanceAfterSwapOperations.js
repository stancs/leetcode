// Last updated: 4/21/2026, 11:32:19 PM
1/**
2 * @param {number[]} colors
3 * @return {number}
4 */
5var maxDistance = function(colors) {
6    let max = 0;
7    const len = colors.length;
8    for(let i = 0; i < len - 1; i++) {
9        for(let j = i+1; j < len; j++) {
10            if(colors[i] !== colors[j]) {
11                const diff = j - i;
12                if(diff > max) {
13                    max = diff;
14                }
15            }
16        }
17    }
18    return max;
19};