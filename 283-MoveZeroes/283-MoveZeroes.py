# Last updated: 4/29/2026, 10:31:49 AM
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        readIdx = 0
        writeIdx = 0
        
        while readIdx < len(nums):
            num = nums[readIdx]
            if num != 0:
                nums[writeIdx] = num
                writeIdx += 1
            readIdx += 1
        
        while writeIdx < len(nums):
            nums[writeIdx] = 0
            writeIdx += 1
        
