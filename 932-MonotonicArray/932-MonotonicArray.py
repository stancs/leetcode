# Last updated: 4/29/2026, 10:26:55 AM
class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        n = len(nums)
        state = "INIT"
        for i in range(1, n):
            if nums[i-1] < nums[i]:
                if state == "INIT":
                    state = "INC"
                elif state == "DEC":
                    return False
            elif nums[i-1] > nums[i]:
                if state == "INIT":
                    state = "DEC"
                elif state == "INC":
                    return False
        return True