# Last updated: 4/29/2026, 10:34:30 AM
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return root
        queue = [ root ]
        while len(queue) != 0:
            nextQueue = []
            for i in range(len(queue)):
                node = queue[i];
                if node.left:
                    nextQueue.append(node.left)
                if node.right:
                    nextQueue.append(node.right)
                if i > 0:
                    prev = queue[i-1]
                    prev.next = node
                if i == len(queue) - 1:
                    node.next = None
            queue = nextQueue
        return root
                    
            