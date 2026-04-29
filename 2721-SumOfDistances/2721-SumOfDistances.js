// Last updated: 4/29/2026, 10:19:49 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const len = nums.length;
    const arr = new Array(len).fill(null);
    const map = {};
    const map2 = {};
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(map[num] === undefined) {
            map[num] = [i];
            map2[num] = [0];
        } else {
            map[num].push(i);
            map2[num].push(0);
        }
    }
    console.log(map);
    for(let i = 0; i < nums.length; i++) {
        if(arr[i] !== null) {
            continue;
        }
        const num = nums[i];
        let idxArr = map[num];
        let sumArr = map2[num];
        let sum = 0;
        for(let j = 0; j < idxArr.length; j++) {
            const idx = idxArr[j];
            sum += Math.abs(idx - i);
        }    
        sumArr[0] = sum;
        const idx = idxArr[0];
        arr[idx] = sumArr[0];
        console.log(`arr[${idx}]=${arr[idx]}`)
        for(let k = 1; k < idxArr.length; k++) {
            const diff = idxArr[k] - idxArr[k-1];
            console.log('diff: ', diff)
            sumArr[k] = sumArr[k-1] - diff * (idxArr.length - 1 - k) + diff * (k - 1);
            console.log(`sumArr[${k}]: ${sumArr[k]}`)
            const idx2 = idxArr[k];
            arr[idx2] = sumArr[k];
            console.log(`arr[${idx2}]=${arr[idx2]}`)
        }
    }
    return arr;
    // 1,2,3,4,5
    // 10, 7(10-1*3), 6(7 - 1 * 2 + 1), 7(6 - 1*1 + 2), 10(7 + 1*3)
    // 1, 3, 5, 10, 13
    // (2+4+9+12) = 27
    // diff: 2, 27 - 3 * 2 + 2 * 0 = 21, 2 + 2 + 7 + 10 = 21
    // diff: 2, 21 - 2 * 2 + 2 * 1 = 19, 4+2+5+8 = 19


};