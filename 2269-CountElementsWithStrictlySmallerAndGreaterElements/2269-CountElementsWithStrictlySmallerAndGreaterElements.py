# Last updated: 4/29/2026, 10:21:23 AM
class Solution:
    def countElements(self, nums: List[int]) -> int:
        nums.sort()
        print(nums)
        level = 0
        count = 0
        prev = None
        res = 0
        for num in nums:
            if prev != None:
                if num == prev:
                    count += 1
                else:
                    if level >= 1:
                        res += count
                    level += 1
                    count = 1
            prev = num
        return res