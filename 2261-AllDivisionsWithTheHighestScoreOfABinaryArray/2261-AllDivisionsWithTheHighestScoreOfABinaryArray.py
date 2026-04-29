# Last updated: 4/29/2026, 10:21:26 AM
# 21:05s
# O(n)
# O(n)
class Solution:
    def maxScoreIndices(self, nums: List[int]) -> List[int]:
        left_zeros = 0
        right_ones = 0
        highest = 0
        highest_list = []
        # print(f"right_ones: {right_ones}")
        def countOnes(arr):
            count = 0
            for num in nums:
                if num == 1:
                    count += 1
            return count
            
        for i in range(len(nums)+1):
            if i == 0:
                right_ones = countOnes(nums)
            else:
                num = nums[i-1]
                if num == 0:
                    left_zeros += 1
                else:
                    right_ones -= 1
            sum = left_zeros + right_ones
            if sum > highest:
                highest = sum
                highest_list = [i]
            elif sum == highest:
                highest_list.append(i)
        
        return highest_list
            
        
            
            