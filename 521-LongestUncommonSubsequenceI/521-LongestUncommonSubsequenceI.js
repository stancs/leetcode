// Last updated: 4/29/2026, 10:29:44 AM
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    let longest = '';
    function findLongest(str, compare) {
        for(let i = 0; i < str.length; i++) {
            for(let j = i + 1; j < str.length + 1; j++) {
                console.log(`(${i}, ${j})`)
                if(j - i > longest.length) {
                    console.log(`longest: ${longest}`);
                    const subStr = str.slice(i, j);
                    console.log(`subStr: ${subStr}, compare: ${compare}`);
                    if(!compare.includes(subStr)) {
                        longest = subStr;
                    }
                }
            }
        }
    }
    findLongest(a, b);
    findLongest(b, a);
    return longest.length === 0? -1: longest.length;
};