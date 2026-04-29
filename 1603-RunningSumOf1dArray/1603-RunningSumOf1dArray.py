# Last updated: 4/29/2026, 10:23:31 AM
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        sumList = []
        sum = 0
        for num in nums:
            sum += num
            sumList.append(sum)
        return sumList
    
