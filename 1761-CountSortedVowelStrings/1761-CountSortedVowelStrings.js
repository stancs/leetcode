// Last updated: 4/29/2026, 10:22:52 AM
/**
 * @param {number} n
 * @return {number}
 */
// 12:38s
// O(n^5) time | O(n^5) space
var countVowelStrings = function(n) {
    const hash = {
        a: ['a', 'e', 'i', 'o', 'u'],
        e: ['e', 'i', 'o', 'u'],
        i: ['i', 'o', 'u'],
        o: ['o', 'u'],
        u: ['u'],
    };
    
    const output = [];
    permute('', n, hash, output);
    return output.length;
};

function permute(str, n, hash, output) {
    if(str.length === n) {
        output.push(str);
        return;
    }
    let list;
    if(str.length === 0) {
        list = hash.a;
        
    } else {
        const lastChar = str[str.length - 1];
        list = hash[lastChar];
    }
    for(const char of list) {
        permute(str + char, n, hash, output);
    }
}