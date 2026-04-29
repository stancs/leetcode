// Last updated: 4/29/2026, 10:19:06 AM
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let nLeft = 0;
    let nRight = 0;
    let nBlank = 0;
    for(const ch of moves) {
        // console.log(`ch: ${ch}`);
        if(ch === 'L') {
            nLeft++;
        } else if(ch === 'R') {
            nRight++;
        } else if(ch === '_') {
            nBlank++;
        }
    }
    console.log(`L: ${nLeft}, R: ${nRight}, _: ${nBlank}`)
    return Math.abs(nLeft - nRight) + nBlank;
};