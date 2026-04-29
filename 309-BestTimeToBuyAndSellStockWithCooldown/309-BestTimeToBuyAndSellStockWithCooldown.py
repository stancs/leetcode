# Last updated: 4/29/2026, 10:31:24 AM
"""
skip: dp(i, holding, cooldown)
buy(holding == False, cooldown = 1): dp(i) = -prices[i] + dp(i+1, True, 0)
sell: dp(i, holding=True, cooldown=0,1) = prices[i] + dp(i+1, False, 0)
"""
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        @cache
        def dp(i, holding, ready):
            if i >= len(prices):
                return 0
            
            skip = dp(i+1, holding, True)
            # Sell
            if holding:
                return max(skip, prices[i] + dp(i+1, False, False))
            # Buy
            else: 
                if ready:
                    return max(skip, -prices[i] + dp(i+1, True, True))
                else:
                    return skip
                
        return dp(0, False, True)