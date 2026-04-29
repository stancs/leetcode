# Last updated: 4/29/2026, 10:33:51 AM
"""
12345 *
23451
34512 *
45123 *
51234
"""

class Solution:
    def findMin(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        
        def getIdx(nums):
            n = len(nums)
            left = 0
            right = n - 1
            while left <= right:
                if nums[left] < nums[right]:
                    return left
                mid = (left + right) // 2
                if nums[mid] > nums[mid+1]:
                    return mid + 1
                if nums[mid-1] > nums[mid]:
                    return mid
                if nums[left] > nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            return left
        
        minIdx = getIdx(nums)
        print(minIdx)
        return nums[minIdx]
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            if nums[mid] < nums[right]:
                right = mid
            elif nums[mid] > nums[right]:
                left = mid + 1
            else:
                right -= 1
        return nums[left]