// Last updated: 4/29/2026, 10:33:47 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`left: ${left}, mid: ${mid}, right: ${right}`)
        if(nums[mid] > nums[mid+1]) {
            return nums[mid+1];
        } else if(mid - 1 >= 0 && nums[mid-1] > nums[mid]) {
            return nums[mid];
        } else {
            if(nums[left] < nums[mid]) {
                if(nums[mid] < nums[right]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                right = mid - 1;
            }
        }
    }
    return nums[left];
};

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    // If mid element is greater than the rightmost element
    if (nums[mid] > nums[right]) {
      left = mid + 1; // Discard the right half
    } else {
      right = mid; // Discard the left half (including mid)
    }
  }

  return nums[left];
}