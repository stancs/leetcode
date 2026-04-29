// Last updated: 4/29/2026, 10:28:57 AM
/**
 * @param {string} moves
 * @return {boolean}
 */
// 2022-11-02
// 2:44s
// O(n)
// O(1)
var judgeCircle = function(moves) {
    let x = 0, y = 0;
    for(const ch of moves) {
        if(ch === 'U') {
            y++;
        } else if(ch === 'D') {
            y--;
        } else if(ch === 'L') {
            x--;
        } else if(ch === 'R') {
            x++;
        }
    }
    return (x === 0 && y === 0);
};