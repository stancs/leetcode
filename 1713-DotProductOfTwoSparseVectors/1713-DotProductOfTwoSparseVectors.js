// Last updated: 4/29/2026, 10:23:06 AM
/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
// 5:08s
// O(n1 + n2) time | O(m1 + m2) space (m1, m2: # of nonzero items)
var SparseVector = function(nums) {
    this.hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            this.hash[i] = nums[i];
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    const sum = Object.keys(this.hash).reduce((accu, curr) => {
        const val2 = vec.hash[curr];
        if(val2) {
            const val1 = this.hash[curr];
            accu += val1 * val2;
        }
        return accu;
    }, 0);
    return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);