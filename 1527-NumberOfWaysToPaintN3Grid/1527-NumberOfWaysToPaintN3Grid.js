// Last updated: 4/29/2026, 10:23:53 AM
/**
 * @param {number} n
 * @return {number}
 */
// 1:00:00s
// O(n) time | O(1) space
var numOfWays = function(n) {
    /*
    for 3 colors:
    1 2 3            1 2 3
    2 3 1     or     3 1 2
    
    1 2 3            1 2 3
    2 1 2     or     2 3 2
    
    for 2 colors:
    
    1 2 1            1 2 1
    2 1 3     or     3 1 2
    
    1 2 1            1 2 1        1 2 1
    2 3 2     or     3 1 3    or  2 1 2
    
    for 3 colors, the next line (3 colors) would be colors3*2 + colors2*2
    for 2 colors, the next line (2 colors) would be colors3*2 + colors2*3
    */
    let colors3 = 6;
    let colors2 = 6;
    if(n === 1) {
        return colors3 + colors2;
    }
    const modulo = Math.pow(10, 9) + 7;
    
    for(i = 2; i <= n; i++) {
        const newColors3 = colors3 * 2 + colors2 * 2;
        const newColors2 = colors3 * 2 + colors2 * 3;
        colors3 = newColors3 % modulo;
        colors2 = newColors2 % modulo;
    }
    return (colors3 + colors2) % modulo;
};