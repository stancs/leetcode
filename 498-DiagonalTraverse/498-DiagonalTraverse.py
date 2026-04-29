# Last updated: 4/29/2026, 10:29:51 AM
"""
3x4
1 2  3  4
5 6  7  8
9 10 11 12
"""
class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        # (0,0) => (1,0),(0,1) => (2,0),(1,1),(0,2) => (2,1),(1,2) => (2,2)
        # (0,0) => (1,0),(0,1) => (2,0),(1,1),(0,2) 
        # => ... => (m-1, 0), (m-2, 1), (m-3,2), ...(0, m-1)
        # => (m-1, 1), (m-2, 2)...
        # => (m-1, n-1)
        m = len(mat)
        n = len(mat[0])
        min_mn = min(m, n)
        def valid(i, j):
            return i >= 0 and i < m and j >= 0 and j < n
        def diagonalTraverse(i, j, arr):
            print(f"({i},{j})")
            arr.append(mat[i][j])
            next_i = i-1
            next_j = j+1
            if valid(next_i, next_j):
                diagonalTraverse(next_i, next_j, arr)
        res = []
        direction = 1
        for i in range(m):
            arr = []
            diagonalTraverse(i, 0, arr)
            if direction == -1:
                arr.reverse()
            res.extend(arr)
            direction *= -1
        for j in range(1, n):
            arr = []
            diagonalTraverse(m-1, j, arr)
            if direction == -1:
                arr.reverse()
            res.extend(arr)
            direction *= -1
        return res