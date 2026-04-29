// Last updated: 4/29/2026, 10:34:39 AM
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const convertNode = (start, end) => {
        if(start <= end) {
            const mid = Math.floor((start + end) / 2);
            const left = convertNode(start, mid - 1);
            const right = convertNode(mid + 1, end);
            const node = new TreeNode(nums[mid], left, right);
            return node;
        }
        return null;
    }
    const head = convertNode(0, nums.length - 1);
    return head;
};