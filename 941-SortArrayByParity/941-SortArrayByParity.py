# Last updated: 4/29/2026, 10:26:52 AM
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        evenList = []
        oddList = []
        for num in nums:
            if num % 2 == 0:
                evenList.append(num)
            else:
                oddList.append(num)
        
        return evenList + oddList