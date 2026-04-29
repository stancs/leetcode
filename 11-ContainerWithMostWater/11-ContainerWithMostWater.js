// Last updated: 4/29/2026, 10:36:46 AM
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while(left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        if(area > max) {
            max = area;
        }
        if(height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    return max;

    // let left = 0;
    // let max = 0;
    // const getArea = (left, right) => {
    //     return Math.min(height[left], height[right]) * (right - left);
    // }
    // for(let right = 1; right < height.length; right++) {
    //     const area = getArea(left, right);
    //     if(area > max) {
    //         max = area;
    //         left
    //     }
    //     let nextArea = area;
    //     while(left + 1 < right && nextArea >= area) {
    //         nextArea = getArea(left+1, right);
    //         if(nextArea > max) {
    //             max = area;
    //             left++
    //         }
    //     }
    // }
    // return max;
};