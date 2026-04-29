// Last updated: 4/29/2026, 10:27:36 AM
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    // put each char in s in map
    // go through order char
    // if char exists in map, then write
    // if not, pass
    const mapS = {};
    const mapOrder = {};
    for(const ch of s) {
        if(mapS[ch] === undefined) {
            mapS[ch] = 1;
        } else {
            mapS[ch]++;
        }
    }
    let output = '';
    let remain = '';
    for(const ch of order) {
        mapOrder[ch] = true;
        if(mapS[ch]) {
            for(let i = 0; i < mapS[ch]; i++) {
                output += ch;
            }
        } 
    }
    for(const ch of s) {
        if(!mapOrder[ch]) {
            remain += ch;
        }
    }
    console.log('output: ', output);
    console.log('remain: ', remain);
    output += remain;
    return output;
};