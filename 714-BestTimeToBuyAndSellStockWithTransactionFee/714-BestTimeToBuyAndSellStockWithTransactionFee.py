# Last updated: 4/29/2026, 10:28:34 AM
"""
hold: dp(i) = dp(i+1, holding)
buy: -prices[i] + dp(i+1, true)
sell: prices[i] - 2 + dp(i+1, false)
"""
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        @cache
        def dp(i, holding):
            # print(f"{i}, {holding}")
            if i >= len(prices):
                return 0
            
            skip = dp(i+1, holding)
            if holding:
                return max(skip, prices[i] - fee + dp(i+1, False))
            else:
                return max(skip, -prices[i] + dp(i+1, True))
        
        return dp(0, False)
