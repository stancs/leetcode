// Last updated: 4/29/2026, 4:02:47 PM
1/**
2 * @param {string} moves
3 * @return {number}
4 */
5var furthestDistanceFromOrigin = function(moves) {
6    let nLeft = 0;
7    let nRight = 0;
8    let nBlank = 0;
9    for(const ch of moves) {
10        // console.log(`ch: ${ch}`);
11        if(ch === 'L') {
12            nLeft++;
13        } else if(ch === 'R') {
14            nRight++;
15        } else if(ch === '_') {
16            nBlank++;
17        }
18    }
19    console.log(`L: ${nLeft}, R: ${nRight}, _: ${nBlank}`)
20    return Math.abs(nLeft - nRight) + nBlank;
21};