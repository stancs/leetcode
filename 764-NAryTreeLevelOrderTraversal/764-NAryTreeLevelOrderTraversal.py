# Last updated: 4/29/2026, 10:28:07 AM
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        if not root:
            return root
        queue = [ root ]
        l = []
        while len(queue) != 0:
            l.append(map(lambda x:x.val, queue))
            nextQueue = []
            # print(queue)
            for node in queue:
                # print(node.val)
                if node.children:
                    nextQueue.extend(node.children)
            queue = nextQueue
        
        return l
                