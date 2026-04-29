# Last updated: 4/29/2026, 10:35:48 AM
"""
17:42
O(m*n)
O(m*n)
"""
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        m = len(matrix)
        n = len(matrix[0])
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
        
        count = 0
        visited = [[False] * n for i in range(m)]
        max_count = m * n
        res = []
        i, j = 0, 0
        curr_direction = 0
        while count < max_count:
            visited[i][j] = True
            res.append(matrix[i][j])
            count += 1
            
            next_i, next_j = next(i, j, curr_direction)
            if not valid(next_i, next_j):
                curr_direction = (curr_direction + 1) % 4
            i, j = next(i, j, curr_direction)
        print(res)
        return res
                