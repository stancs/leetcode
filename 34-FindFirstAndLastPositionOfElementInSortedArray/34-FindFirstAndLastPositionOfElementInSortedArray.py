# Last updated: 4/29/2026, 10:36:19 AM
class Solution:    
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        p1, p2 = -1, -1
        if n == 1:
            if nums[0] == target:
                p1, p2 = 0, 0
            return [p1, p2]
        
        def findBoundary(nums, isFirst):
            left = 0
            right = n - 1
            while left <= right:
                mid = (left + right) // 2
                print(f"{left}\t{mid}\t{right}")
                if nums[mid] == target:
                    if isFirst:
                        if mid - 1 < 0 or nums[mid-1] != target:
                            return mid
                        else:
                            right = mid - 1
                    else:
                        if mid + 1 == n or nums[mid+1] != target:
                            return mid
                        else:
                            left = mid + 1
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            return -1
        
        p1 = findBoundary(nums, True)
        p2 = findBoundary(nums, False)
        
        return [p1, p2]
