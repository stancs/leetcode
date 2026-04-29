// Last updated: 4/29/2026, 10:20:20 AM
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
// 2022-12-17
// 10:30s
// O(1)
// O(1)
var haveConflict = function(event1, event2) {
    const convertToMin = str => {
        const [hrStr, minStr] = str.split(':')
        const hr = parseInt(hrStr);
        const min = parseInt(minStr);
        const totalMin = 60 * hr + min;
        return totalMin;
    }
    const arr = [[convertToMin(event1[0]), convertToMin(event1[1])], [convertToMin(event2[0]), convertToMin(event2[1])]]
    arr.sort((a, b) => a[0] - b[0]);
    console.log(arr);
    const [[start1, end1], [start2, end2]] = arr;
    if(end1 >= start2) {
        return true;
    }
    return false;
};