// Last updated: 4/29/2026, 10:23:44 AM
/**
 * @param {string} text
 * @return {string}
 */
// 8:00s
// T O(n)
// S O(n)
var arrangeWords = function(text) {
    const words = text.toLowerCase().split(' ');
    console.log(words);
    const words2 = [];
    for(let i = 0; i < words.length; i++) {
        words2.push([words[i], i]);
    }
    console.log(words2);
    const sorted = words2.sort((a, b) => {
        const len1 = a[0].length;
        const len2 = b[0].length;
        if(a === b) {
            return a[1] - b[1];
        } else {
            return len1 - len2;
        }
    })
    console.log(sorted);
    const str1 = sorted.map(item => item[0]).join(' ');
    const str2 = str1.substring(0, 1).toUpperCase() + str1.substring(1);
    console.log(str2);
    return str2;
};