// Last updated: 4/29/2026, 10:32:21 AM
/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
    this.words = words;
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
// 5:00s
// O(n) time | O(1) space
WordDistance.prototype.shortest = function(word1, word2) {
    let idx1 = -1;
    let idx2 = -1;
    let min = Number.MAX_VALUE;
    for(let i = 0; i < this.words.length; i++) {
        const word = this.words[i];
        if(word === word1) {
            idx1 = i;
        } else if(word === word2) {
            idx2 = i;
        }
        if(idx1 !== -1 && idx2 !== -1) {
            const diff = Math.abs(idx1 - idx2);
            if(diff < min) {
                min = diff;
            }
        }
    }
    return min;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */