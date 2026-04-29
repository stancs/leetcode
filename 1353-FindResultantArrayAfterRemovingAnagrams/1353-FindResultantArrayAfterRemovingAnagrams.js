// Last updated: 4/29/2026, 10:24:52 AM
/**
 * @param {string[]} words
 * @return {string[]}
 */
// 2022-11-28
// 30:00s
// O(n): best, O(n^2): worst
// O(n)
var removeAnagrams = function(words) {
    const map = {};
    let expanded = words.map(word => { 
        const sorted = word.split('').sort().join('');
        return { word, sorted, remove: false };
    });
    console.log(expanded);
    let removeNum = 1;
    while(removeNum !== 0) {
        const len1 = expanded.length;
        for(let i = 1; i < expanded.length; i++) {
            const item1 = expanded[i-1];
            const item2 = expanded[i];
            if(item1.sorted === item2.sorted) {
                item2.remove = true;
            }
        }
        expanded = expanded.filter(item => item.remove === false);
        const len2 = expanded.length;
        removeNum = len1 - len2;
    }
    return expanded.map(item => item.word);
}