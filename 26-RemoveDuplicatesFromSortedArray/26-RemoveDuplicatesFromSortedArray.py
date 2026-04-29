# Last updated: 4/29/2026, 10:36:30 AM
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        prev = None
        while i < len(nums):
            curr = nums[i]
            if prev != None:
                if prev == curr:
                    nums.pop(i)
                    continue
            prev = curr
            i += 1
        return i