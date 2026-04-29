// Last updated: 4/29/2026, 10:20:44 AM
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const subMap = {' ': ' '};
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let i = 0;
    for(const ch of key) {
        if(ch !== ' ') {
            if(subMap[ch] === undefined) {
                subMap[ch] = alpha[i];
                i++;
            }
        }
    }
    console.log(subMap);
    const output = message.split('').map(ch => subMap[ch]).join('');
    return output;
};