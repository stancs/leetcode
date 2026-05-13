// Last updated: 5/13/2026, 12:12:40 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(map[num] === undefined) {
            map[num] = { freq: 1, arr: [i]}
        } else {
            map[num].freq++;
            map[num].arr.push(i);
        }
    }
    // console.log(map);
    function dist3pts(p, q, r) {
        const dist = Math.abs(p - q) + Math.abs(q - r) + Math.abs(r - p);
        return dist;
    }
    const keys = Object.keys(map);
    let min = Number.MAX_SAFE_INTEGER;
    for(const key of keys) {
        const obj = map[key];
        if(obj.freq >= 3) {
            for(let i = 0; i < obj.arr.length - 2; i++) {
                const p = obj.arr[i];
                const q = obj.arr[i+1];
                const r = obj.arr[i+2];
                const dist = dist3pts(p, q, r);
                if(min > dist) {
                    min = dist;
                }
            }
        }
    }
    return min === Number.MAX_SAFE_INTEGER? -1: min;
};