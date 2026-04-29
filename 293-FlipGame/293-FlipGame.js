// Last updated: 4/29/2026, 10:31:34 AM
/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function(currentState) {
    const output = [];
    const n = currentState.length;
    for(let i = 0; i < n-1; i++) {
        if(currentState[i] === '+' && currentState[i+1] === '+') {
            const move = currentState.slice(0, i) + '--' + currentState.slice(i+2);
            console.log(move);
            output.push(move);
        }
    }
    return output;
};