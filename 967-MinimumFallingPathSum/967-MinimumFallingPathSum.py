# Last updated: 4/29/2026, 10:26:51 AM
"""
dp(i,j) = matrix[i][j] + min(dp(i+1, j-1), dp(i+1, j), dp(i+1, j+1))
"""
class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        m = len(matrix)
        n = len(matrix[0])
        
        @cache
        def dp(i, j):
            if i == m-1:
                return matrix[i][j]
            l = [ dp(i+1, j) ];
            if j-1 >= 0:
                l.append(dp(i+1, j-1))
            if j+1 < n:
                l.append(dp(i+1, j+1))
            return matrix[i][j] + min(l)
        
        l = []
        for j in range(n):
            l.append(dp(0, j))
        return min(l)