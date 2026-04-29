# Last updated: 4/29/2026, 10:22:45 AM
class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        m = 0
        for row in accounts:
            sum = 0
            for col in row:
                sum += col
            m = max(m, sum)
        return m