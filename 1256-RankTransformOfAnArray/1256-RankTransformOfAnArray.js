// Last updated: 4/29/2026, 10:25:08 AM
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const arr2 = arr.map((value, index) => ({value, index}));
    // console.log(arr2);
    arr2.sort((a, b) => a.value - b.value);
    // console.log(arr2);
    let count = 1;
    let prev;
    for(const obj of arr2) {
        const curr = obj.value;
        if(prev !== undefined) {
            if(prev !== curr) {
                count++;
            }
        }
        prev = curr;
        obj.rank = count;
    }
    const arr3 = arr2.sort((a, b) => a.index - b.index);
    // console.log(arr3);
    const arr4 = arr3.map(obj => obj.rank);
    // console.log(arr4);
    
    return arr4;
};