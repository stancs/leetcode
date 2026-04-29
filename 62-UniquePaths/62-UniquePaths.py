# Last updated: 4/29/2026, 10:35:37 AM
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        @cache
        def dp(row, col):
            if row == m-1 and col == n-1:
                return 1
            ways = 0
            if row < m - 1:
                ways += dp(row+1, col)
            if col < n - 1:
                ways += dp(row, col+1)
            return ways
            
        return dp(0, 0)