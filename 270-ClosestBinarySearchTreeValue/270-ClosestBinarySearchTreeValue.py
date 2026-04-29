# Last updated: 4/29/2026, 10:31:56 AM
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def closestValue(self, root: Optional[TreeNode], target: float) -> int:
        node = root
        best_value = root.val
        best_diff = abs(root.val - target)
        while node:
            diff = abs(node.val - target)
            if diff < best_diff:
                best_value = node.val
                best_diff = diff
            if node.val == target:
                return node.val
            elif node.val < target:
                node = node.right
            else:
                node = node.left
        return best_value
                
                