# Last updated: 4/29/2026, 10:30:23 AM
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        l = list(set(nums))
        print(l)
        if len(l) == 1:
            return l[0]
        elif len(l) == 2:
            return max(l[0], l[1])
        
        return heapq.nlargest(3, l)[-1]