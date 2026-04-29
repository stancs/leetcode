// Last updated: 4/29/2026, 10:25:26 AM
/**
 * @param {string} address
 * @return {string}
 */
// 3:01s
// O(n) time | O(n) space
var defangIPaddr = function(address) {
    let output = '';
    for(const char of address) {
        if(char === '.') {
            output += '[.]';
        } else {
            output += char;
        }
    }
    return output;
};