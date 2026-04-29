// Last updated: 4/29/2026, 10:23:52 AM
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    // console.log(`max: ${max}`);
    const result = [];
    for(const candy of candies) {
        if(candy + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};