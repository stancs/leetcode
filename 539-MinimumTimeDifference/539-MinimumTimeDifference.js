// Last updated: 4/29/2026, 10:29:37 AM
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const sorted = timePoints.sort();
    console.log(sorted);
    const strToMin = str => {
        const [h, m] = str.split(':').map(str => parseInt(str));
        return 60 * h + m;
    }
    const minutesDiff = (m1, m2) => {
        const big = Math.max(m1, m2);
        const small = Math.min(m1, m2);
        const d1 = big - small;
        const d2 = small + 24 * 60 - big;
        return Math.min(d1, d2);
    }
    let min = 24 * 60;
    const arr = sorted.concat(sorted[0]);
    for(let i = 0; i < arr.length - 1; i++) {
        const str1 = arr[i];
        const str2 = arr[i+1];
        const m1 = strToMin(str1);
        const m2 = strToMin(str2);
        const d = minutesDiff(m1, m2);
        if(d < min) {
            min = d;
        }
    }
    // for(let i = 0; i < timePoints.length - 1; i++) {
    //     for(let j = i + 1; j < timePoints.length; j++) {
    //         const str1 = timePoints[i];
    //         const str2 = timePoints[j];
    //         const m1 = strToMin(str1);
    //         const m2 = strToMin(str2);
    //         const d = minutesDiff(m1, m2);
    //         if(d < min) {
    //             min = d;
    //         }
    //     }
    // }
    return min;
};