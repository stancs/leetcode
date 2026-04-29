# Last updated: 4/29/2026, 10:21:58 AM
class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        nums.sort(key=lambda x:int(x), reverse=True)
        print(nums)
        return nums[k-1]