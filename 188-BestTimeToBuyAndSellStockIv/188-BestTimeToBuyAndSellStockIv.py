# Last updated: 4/29/2026, 10:33:20 AM
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        # skip dp(i+1, holding, remain)
        # buy: -prices[i] + dp(i+1, True, remain-1)
        # sell +prices[i] + dp(i+1, False, remain-1 )
        @cache
        def dp(i, holding, remain):
            if i >= len(prices):
                return 0
            skip = dp(i+1, holding, remain)
            if remain > 0:
                if holding:
                    return max(prices[i] + dp(i+1, False, remain - 1), skip)
                if not holding:
                    return max(-prices[i] + dp(i+1, True, remain), skip)
            return skip

        return dp(0, False, k)