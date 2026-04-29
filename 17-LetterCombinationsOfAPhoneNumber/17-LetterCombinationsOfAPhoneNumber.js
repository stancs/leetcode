// Last updated: 4/29/2026, 10:36:39 AM
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) {
        return [];
    }
    const map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    const output = [];
    // for(let i = 0; i < digits.length; i++) {
    //     const digit = digits[i];

    // }
    const backtrack = (str, word) => {
        if(str === '') {
            output.push(word);
            return;
        }
        const digit = str[0];
        const remaining = str.slice(1);
        const letters = map[digit];
        for(const ch of letters) {
            backtrack(remaining, word + ch);
        }
    }
    backtrack(digits, "");
    return output;
};