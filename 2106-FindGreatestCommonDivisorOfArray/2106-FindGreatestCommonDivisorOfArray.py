# Last updated: 4/29/2026, 10:22:01 AM
class Solution:
    def findGCD(self, nums: List[int]) -> int:
        import math
        nums.sort()
        return math.gcd(nums[0], nums[len(nums)-1])