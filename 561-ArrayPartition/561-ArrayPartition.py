# Last updated: 4/29/2026, 10:29:23 AM
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        l = len(nums)
        sum = 0
        for i in range(0, l, 2):
            sum += min(nums[i], nums[i+1])
            
        return sum