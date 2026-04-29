// Last updated: 4/29/2026, 10:31:51 AM
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const sorted = citations.sort((a, b) => b - a);
    console.log(sorted);
    let last = 0;
    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] >= i+1) {
            last = i+1;
        }
    }
    return last;
};