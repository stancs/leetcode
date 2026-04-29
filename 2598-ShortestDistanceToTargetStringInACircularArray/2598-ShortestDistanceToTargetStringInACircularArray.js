// Last updated: 4/29/2026, 10:20:05 AM
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    let currIndex = startIndex;
    const n = words.length;
    let steps = 0;
    while(steps < n) {
        const index1 = (startIndex - steps + n) % n;
        const index2 = (startIndex + steps) % n;
        console.log(`steps: ${steps}`)
        console.log(`index1: ${index1}`)
        console.log(`index2: ${index2}`)
        const word1 = words[index1];
        const word2 = words[index2];
        if(word1 === target || word2 === target) {
            return steps;
        }
        steps++;
    }
    return -1;
};