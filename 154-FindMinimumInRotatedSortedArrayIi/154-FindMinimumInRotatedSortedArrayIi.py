# Last updated: 4/29/2026, 10:33:46 AM
"""
1122334455 *
1223344551 - 
2233445511
2334455112 -
3344551122
3445511223 *
4455112233 *
4551122334 -
5511223344
5112233445 -

"""
class Solution:
    def findMin(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        
        n = len(nums)
        left = 0
        right = n - 1
        while(left <= right):
            if nums[left] < nums[right]:
                return nums[left]
            mid = left + (right - left) // 2
            if nums[mid] > nums[mid+1]:
                return nums[mid + 1]
            if nums[mid-1] > nums[mid]:
                return nums[mid]
            if nums[left] == nums[right] and nums[left] == nums[mid]:
                return min(nums[left:right+1])
            if nums[left] > nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        return nums[left]
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] < nums[right]:
                right = mid
            elif nums[mid] > nums[right]:
                left = mid + 1
            else:
                right -= 1
        return nums[left]
                