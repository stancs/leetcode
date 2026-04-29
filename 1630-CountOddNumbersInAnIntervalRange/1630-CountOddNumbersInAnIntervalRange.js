// Last updated: 4/29/2026, 10:23:24 AM
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// O(1)
// O(1)
// 4:29s
var countOdds = function(low, high) {
    // let start, end;
    // // if(low % 2 === 0) {
    //     start = low / 2;
    // } else {
    //     start = Math.floor(low / 2);
    // }
    let start = Math.floor(low / 2);
    let end;
    if(high % 2 === 0) {
        end = high / 2 - 1; 
    } else {
        end = Math.floor(high / 2);
    }
    const count = end - start + 1;
    return count;
};