// Last updated: 4/29/2026, 10:32:22 AM
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// O(n) time | O(1) space
var shortestDistance = function(words, word1, word2) {
    let idx1 = -1;
    let idx2 = -1;
    let min = Number.MAX_VALUE;
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
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

/*
// 7:00s
// O(n^2) time | O(1) space
var shortestDistance = function(words, word1, word2) {
    const list1 = [];
    const list2 = [];
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        if(word === word1) {
            list1.push(i);
        } else if(word === word2) {
            list2.push(i);
        }
    }
    let min = Number.MAX_VALUE;
    for(let i = 0; i < list1.length; i++) {
        for(let j = 0; j < list2.length; j++) {
            const idx1 = list1[i];
            const idx2 = list2[j];
            const diff = Math.abs(idx1 - idx2);
            if(diff < min) {
                min = diff;
            }
        }
    }
    return min;
};
*/