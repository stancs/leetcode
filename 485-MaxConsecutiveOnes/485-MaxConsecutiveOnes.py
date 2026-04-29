# Last updated: 4/29/2026, 10:29:55 AM
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        max = 0
        count = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                if i == 0:
                    count = 1
                else:
                    if nums[i-1] == 1:
                        count += 1
                    else:
                        count = 1
                if count > max:
                    max = count
        return max