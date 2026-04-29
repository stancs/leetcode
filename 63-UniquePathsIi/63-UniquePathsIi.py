# Last updated: 4/29/2026, 10:35:29 AM
"""
dp(x, y): the number of possible unique paths
dp(0, 0)
dp(i, j) = dp(i, j+1) + dp(i+1, j) 

"""
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m = len(obstacleGrid)
        n = len(obstacleGrid[0])
        print(f"m={m}, n={n}")
        if m == 1 and n == 1:
            return 1 if obstacleGrid[0][0] == 0 else 0
        if obstacleGrid[0][0] == 1:
            return 0
        @cache
        def dp(i, j):
            print(f"({i}, {j})")
            if i == m-1 and j == n-1:
                return 1
            
            bottom = 0
            right = 0
            if i < m-1:
                bottom = dp(i+1, j) if obstacleGrid[i+1][j] == 0 else 0
            if j < n-1:
                right = dp(i, j+1) if obstacleGrid[i][j+1] == 0 else 0
            return bottom + right
        
        return dp(0, 0)