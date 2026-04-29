# Last updated: 4/29/2026, 10:33:29 AM
"""

"""
class Solution:
    def rob(self, nums: List[int]) -> int:
        def getNum(i):
            if i < len(nums):
                return nums[i]
            else:
                return 0
        @cache
        def dp(i):
            if i >= len(nums):
                return 0
            return max(getNum(i) + dp(i+2), getNum(i+1) + dp(i+3))
        
        return dp(0)