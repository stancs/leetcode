# Last updated: 4/29/2026, 10:32:57 AM
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        sum = 0
        min_len = None
        for i in range(len(nums)):
            sum += nums[i]
            while sum >= target:
                if min_len == None:
                    min_len = i - left + 1
                else:
                    min_len = min(min_len, i - left + 1)
                sum -= nums[left]
                left += 1
        if min_len == None:
            return 0
        else:
            return min_len