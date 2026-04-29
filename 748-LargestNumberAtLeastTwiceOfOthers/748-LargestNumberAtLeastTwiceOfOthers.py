# Last updated: 4/29/2026, 10:28:10 AM
"""
5:21s
O(n)
O(n)
"""
class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        nums2 = []
        for i in range(len(nums)):
            nums2.append([nums[i], i])
        nums2.sort(reverse=True, key=lambda x:x[0])
        print(nums2)
        if nums2[0][0] >= 2 * nums2[1][0]:
            return nums2[0][1]
        return -1