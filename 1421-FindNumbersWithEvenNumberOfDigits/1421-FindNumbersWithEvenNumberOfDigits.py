# Last updated: 4/29/2026, 10:24:25 AM
class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        count = 0
        for num in nums:
            num_len = len(str(num))
            if num_len % 2 == 0:
                count += 1
        
        return count