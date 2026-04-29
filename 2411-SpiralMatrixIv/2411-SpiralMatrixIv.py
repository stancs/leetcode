# Last updated: 4/29/2026, 10:20:48 AM
"""
11:23
O(m*n)
O(m*n)
"""
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def spiralMatrix(self, m: int, n: int, head: Optional[ListNode]) -> List[List[int]]:
        mat = [[-1]*n for i in range(m)]
        # print(mat)
        visited = [[False]*n for i in range(m)]
        def valid(i, j):
            return i >= 0 and i < m and j >= 0 and j < n and not visited[i][j]
        def next(i, j, direction):
            if direction == 0:
                return [i, j+1]
            elif direction == 1:
                return [i+1, j]
            elif direction == 2:
                return [i, j-1]
            else:
                return [i-1, j]
        
        node = head
        i, j = 0, 0
        direction = 0
        while node:
            mat[i][j] = node.val
            visited[i][j] = True
            next_i, next_j = next(i, j, direction)
            if valid(next_i, next_j):
                i, j = next_i, next_j
            else:
                direction = (direction + 1) % 4
                i, j = next(i, j, direction)
            node = node.next
        
        return mat