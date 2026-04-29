// Last updated: 4/29/2026, 10:21:05 AM
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    const numToArr = n => {
        let curr = n;
        const arr = [];
        while(curr !== 0) {
            const remainder = curr % 2;
            arr.push(remainder);
            curr = (curr - remainder) / 2;
        }
        return arr;
    }
    const startArr = numToArr(start);
    const goalArr = numToArr(goal);

    console.log(startArr);
    console.log(goalArr);
    let count = 0;
    let i = 0, j = 0;
    while(i < startArr.length || j < goalArr.length) {
        let n1 = 0, n2 = 0;
        if(i < startArr.length) {
            n1 = startArr[i];
            i++;
        }
        if(j < goalArr.length) {
            n2 = goalArr[j];
            j++;
        }
        if(n1 !== n2) {
            count++;
        }
    }
    return count;
};