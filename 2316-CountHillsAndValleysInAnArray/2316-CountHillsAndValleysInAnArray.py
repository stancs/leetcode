# Last updated: 4/29/2026, 10:21:07 AM
class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        state = "INIT"
        n = len(nums)
        count = 0
        for i in range(1, n):
            if nums[i-1] < nums[i]:
                if state == "VALLEY_MID":
                    count += 1
                state = "HILL_MID"
            elif nums[i-1] > nums[i]:
                if state == "HILL_MID":
                    count += 1
                state = "VALLEY_MID"
        
        return count
                
            