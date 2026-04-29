# Last updated: 4/29/2026, 10:24:42 AM
"""
 remain, 3, 3
    max(piles[0] + dp(remain - 1, 2, 3), piles[1] + dp(remain-1, 3, 2))
    if remain == 
"""
class Solution:
    def maxValueOfCoins(self, piles: List[List[int]], k: int) -> int:
        @cache
        def dp(i, remain):
            if i == len(piles) or remain == 0:
                return 0
            take = 0
            pile_len = len(piles[i])
            curr = 0
            for coin_num in range(1, min(remain, pile_len) + 1):
                curr += piles[i][coin_num - 1]
                take = max(take, curr + dp(i+1, remain-coin_num))
            return max(dp(i+1, remain), take)
        
        return dp(0, k)