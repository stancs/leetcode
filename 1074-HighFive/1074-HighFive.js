// Last updated: 4/29/2026, 10:26:10 AM
/**
 * @param {number[][]} items
 * @return {number[][]}
 */
// 6:26s
// O(n) time | O(n) space
var highFive = function(items) {
    const hash = {};
    for(const item of items) {
        const [id, score] = item;
        if(hash[id] === undefined) {
            hash[id] = [score];
        } else {
            hash[id].push(score);
        }
    }
    const output = [];
    Object.keys(hash).forEach(key => {
        const scores = hash[key];
        scores.sort((a,b) => b-a);
        let sum = 0;
        for(let i = 0; i < 5; i++) {
            sum += scores[i];
        }
        const average = Math.floor(sum / 5);
        output.push([key, average]);
    })
    return output;
};