// Last updated: 4/29/2026, 10:30:21 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for(const num of nums) {
        sum += num;
    }
    if(sum % 2 === 1) {
        return false;
    }
    const target = sum / 2;
    
    // return permute([], nums, 0, target);
    // return isSum(target, nums);
    const dp = [];
    for(let i = 0; i <= nums.length; i++) {
        // Initial value if false
        const row = new Array(target + 1).fill(false);
        dp.push(row);
        for(let  j = 0; j <= target; j++) {
            if(j === 0) {
                dp[i][0] = true;
                continue;
            }
            if(i !== 0) {
                const elmt = nums[i-1];
                if(dp[i-1][j] === true) {
                    dp[i][j] = true;
                } else if(j - elmt >= 0 && dp[i - 1][j - elmt] === true) {
                    dp[i][j] = true;
                }
            }
            if(dp[i][target] === true) {
                // console.log(dp);
                return true;
            }
        }
    }
    // console.log(dp);
    return false;
};

function isSum(target, arr) {
    if(target === 0) {
        return true;
    } else if(target < 0) {
        return false;
    } else {
        for(let i = 0; i < arr.length; i++) {
            const num = arr[i];
            const newTarget = target - num;
            const newArr = arr.slice(0, i).concat(arr.slice(i+1));
            const output = isSum(newTarget, newArr);
            if(output === true) {
                return true;
            }
        }
        return false;
    }
}

function permute(curr, remains, sum, target) {
    if(sum === target) {
        return true;
    } else if(sum > target) {
        return false;
    } else {
        let output = false;
        for(let i = 0; i < remains.length; i++) {
            const num = remains[i];
            const newCurr = curr.concat(num);
            const newRemains = remains.slice(0, i).concat(remains.slice(i+1));
            const output = permute(newCurr, newRemains, sum + num, target);
            if(output === true) {
                return true;
            }
        }
        return false;
    }
}