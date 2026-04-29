// Last updated: 4/29/2026, 10:30:05 AM
/**
 * @param {string} s
 * @return {string}
 */
// 2022-12-11
// 10:29s
// O(n)
// O(n);
var frequencySort = function(s) {
    const map = {};
    for(const ch of s) {
        if(map[ch] === undefined) {
            map[ch] = 1;
        } else {
            map[ch]++;
        }
    }
    console.log(map);
    const arr = s.split('').map(ch => ({ ch, freq: map[ch]}));
    console.log(arr);
    const arr2 = arr.sort((a, b) => {
        if(b.freq !== a.freq) {
            return b.freq - a.freq;    
        } else {
            return a.ch.localeCompare(b.ch);
        }
        
    });
    console.log(arr2);
    const sorted = arr2.map(item => item.ch).join('');
    return sorted;
};