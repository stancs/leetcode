// Last updated: 4/29/2026, 10:24:11 AM
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const countOnes = num => {
        let count = 0;
        let curr = num;
        while(curr !== 0) {
            if(curr % 2 === 1) {
                count++;
            }
            curr = Math.floor(curr / 2);
        }
        return count;
    }
    console.log(countOnes(3));
    console.log(countOnes(5));
    console.log(countOnes(6));
    console.log(countOnes(7));
    arr.sort((a, b) => {
        const countA = countOnes(a);
        const countB = countOnes(b);
        if(countA === countB) {
            return a - b;
        } else {
            return countA - countB;
        }
    });
    return arr;
};