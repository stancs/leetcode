// Last updated: 4/29/2026, 10:25:38 AM
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    // check all 3 nums
    // if they are the same, store it.
    // if not, find the min
    // find the next item in the arry of min
    const res = [];
    let i1 = 0, i2 = 0, i3 = 0;
    while(i1 < arr1.length && i2 < arr2.length && i3 < arr3.length) {
        const n1 = arr1[i1], n2 = arr2[i2], n3 = arr3[i3];
        // console.log(`n1: ${n1}, n2: ${n2}, n3: ${n3} i1: ${i1}, i2: ${i2}, i3: ${i3}`)
        if(n1 === n2 && n2 === n3) {
            // console.log(`ADD ${n1}`)
            res.push(n1);
            i1++;
            i2++;
            i3++;
            continue;
        }
        const min = Math.min(n1, n2, n3);
        if(n1 === min) {
            i1++;
        }
        if(n2 === min) {
            i2++;
        }
        if(n3 === min) {
            i3++;
        }
    }
    return res;
};