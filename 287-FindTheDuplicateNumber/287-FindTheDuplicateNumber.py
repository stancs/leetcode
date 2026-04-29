# Last updated: 4/29/2026, 10:31:39 AM
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        from collections import defaultdict
        dict = defaultdict(lambda: None)
        for num in nums:
            if dict[num] == True:
                return num
            else:
                dict[num] = True