# Last updated: 4/29/2026, 10:34:51 AM
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        def compare(p, q):
            if p == None and q == None:
                return True
            elif p != None and q == None:
                return False
            elif p == None and q != None:
                return False
            if p.val != q.val:
                return False
            leftRes = compare(p.left, q.left)
            if not leftRes:
                return False
            
            rightRes = compare(p.right, q.right)
            if not rightRes:
                return False
            
            return True
        return compare(p, q)