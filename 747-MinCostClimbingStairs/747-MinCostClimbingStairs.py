# Last updated: 4/29/2026, 10:28:16 AM
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        def get_cost(i):
            if i < len(cost):
                return cost[i]
            else:
                return 0
        @cache
        def dp(i):
            if i >= len(cost):
                return 0
            return min(get_cost(i) + dp(i+1), get_cost(i+1) + dp(i+2))
        
        return dp(0)