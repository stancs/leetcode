# Last updated: 4/29/2026, 10:33:39 AM
"""
12321 *
12341 *
14123
"""
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        while left < right:
            mid = (left + right) // 2
            print(f"{left}\t{mid}\t{right}")
            if nums[mid] > nums[mid+1] :
                right = mid
            else:
                left = mid + 1
        print(f"<final>: {left}\t{right}")
        return left
                
            
                