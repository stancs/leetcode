// Last updated: 4/29/2026, 10:22:42 AM
/**
 * @param {string} command
 * @return {string}
 */
// 7:44s
// O(n) time | O(n) space
var interpret = function(command) {
    let output = '';
    let i = 0;
    while(i < command.length) {
        if(command[i] === 'G') {
            output += 'G';
            i++;
        } else if(i + 2 <= command.length && command.slice(i, i+2) === '()') {
            output += 'o';
            i += 2;
        } else if(i + 4 <= command.length && command.slice(i, i+4) === '(al)') {
            output += 'al';
            i += 4;
        }
    }
    return output;
};