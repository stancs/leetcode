# Last updated: 4/29/2026, 10:35:31 AM
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        
        @cache
        def dp(row, col):
            if row == m-1 and col == n-1:
                return grid[m-1][n-1]
            
            l = []
            if row < m-1:
                l.append(dp(row+1, col))
            if col < n-1:
                l.append(dp(row, col+1))
            return grid[row][col] + min(l)
        
        return dp(0, 0)