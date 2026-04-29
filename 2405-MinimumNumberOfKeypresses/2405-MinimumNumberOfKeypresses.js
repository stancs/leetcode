// Last updated: 4/29/2026, 10:20:45 AM
/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function(s) {
    const freqMap = {};
    for(const ch of s) {
        if(freqMap[ch] === undefined) {
            freqMap[ch] = 1;
        } else {
            freqMap[ch]++;
        }
    }
    // console.log(`freqMap:`)
    // console.log(freqMap);
    const sortedKeys = Object.keys(freqMap).sort((a, b) => freqMap[b]-freqMap[a]);
    // console.log(sortedKeys);
    let s2 = '';
    for(const key of sortedKeys) {
        const freq = freqMap[key];
        for(let i = 0; i < freq; i++) {
            s2 += key;
        }
    }
    // console.log(s2);
    const map = {};
    let count = 0;
    let clicks = 0;
    for(const ch of s2) {
        // console.log(`ch: ${ch}`)
        if(map[ch] === undefined) {
            if(count < 9) {
                map[ch] = 1;
                count++;
                clicks++;
            } else if(count < 18) {
                map[ch] = 2;
                count += 1;
                clicks += 2;
            } else {
                map[ch] = 3;
                count += 1;
                clicks += 3;
            }
            // console.log(`newly added`)
        } else {
            clicks += map[ch];
            // console.log(`found it`)
        }
        // console.log(`count: ${count}, clicks: ${clicks}`)
    }
    return clicks;
};