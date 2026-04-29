# Last updated: 4/29/2026, 10:21:11 AM
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def createBinaryTree(self, descriptions: List[List[int]]) -> Optional[TreeNode]:
        from collections import defaultdict
        map = defaultdict(lambda: None)
        
        for parent, child, isLeft in descriptions:
            parent_node, child_node = None, None
            if map[parent] == None:
                parent_node = TreeNode(parent, None, None)
                map[parent] = [parent_node, False]
            else:
                parent_node = map[parent][0]
            if map[child] == None:
                child_node = TreeNode(child, None, None)
                map[child] = [child_node, True]
            else:
                child_node = map[child][0]
                map[child][1] = True
            if isLeft: 
                parent_node.left = child_node
            else:
                parent_node.right = child_node
        
        for k, v in map.items():
            node, is_child = v
            if not is_child:
                return node