// Last updated: 4/29/2026, 10:36:18 AM
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
        if (!s || words.length === 0) return [];

    const wordLen = words[0].length;
    const numWords = words.length;
    const totalLen = wordLen * numWords;
    const wordCount = new Map();
    const result = [];

    // Build frequency map of words
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    // Try each offset within word length
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let windowCount = new Map();
        let wordsUsed = 0;

        while (right + wordLen <= s.length) {
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            if (wordCount.has(word)) {
                windowCount.set(word, (windowCount.get(word) || 0) + 1);
                wordsUsed++;

                while (windowCount.get(word) > wordCount.get(word)) {
                    const leftWord = s.substring(left, left + wordLen);
                    windowCount.set(leftWord, windowCount.get(leftWord) - 1);
                    left += wordLen;
                    wordsUsed--;
                }

                if (wordsUsed === numWords) {
                    result.push(left);
                }
            } else {
                // Reset window
                windowCount.clear();
                wordsUsed = 0;
                left = right;
            }
        }
    }

    return result;
};