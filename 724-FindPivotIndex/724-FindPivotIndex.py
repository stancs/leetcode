# Last updated: 4/29/2026, 10:28:28 AM
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums);
        sums = []
        sum = 0
        for i in range(n):
            sum += nums[i]
            sums.append(sum)
        print(sums)
        
        for i in range(n):
            leftIdx = i - 1
            rightIdx = i + 1
            leftSum = 0
            rightSum = 0
            if leftIdx >= 0:
                leftSum = sums[leftIdx]
            if rightIdx <= n - 1:
                rightSum = sums[n-1] - sums[i]
            if leftSum == rightSum:
                return i
        return -1
            