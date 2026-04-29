# Last updated: 4/29/2026, 10:23:57 AM
class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        s = sum(nums)
        nums.sort(reverse=True)
        print(s)
        print(nums)
        res = []
        curr = 0
        for num in nums:
            curr += num
            res.append(num)
            if curr > s - curr:
                return res
        