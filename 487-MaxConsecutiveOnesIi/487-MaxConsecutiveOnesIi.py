# Last updated: 4/29/2026, 10:29:53 AM
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        max_count = 0
        curr_count = 0
        prev_count = 0
        prev = None
        for i in range(len(nums)):
            curr = nums[i]
            print(f"index: {i}, curr: {curr}")
            if curr == 1:
                if prev == 1:
                    curr_count += 1
                else:
                    curr_count = 1
                prev_count += 1
            else:
                if prev == 1 or prev == None:
                    prev_count = curr_count + 1
                    curr_count = 0    
            prev = curr
            print(f"prev_count: {prev_count}, curr_count: {curr_count}")
            tmp_count = max(prev_count, curr_count)
            if tmp_count > max_count:
                max_count = tmp_count
        return max_count
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        longest_sequence = 0
        for left in range(len(nums)):
            num_zeroes = 0
            for right in range(left, len(nums)):   # check every consecutive sequence
                if num_zeroes == 2:
                    break
                if nums[right] == 0:               # count how many 0's
                    num_zeroes += 1
                if num_zeroes <= 1:                 # update answer if it's valid
                    longest_sequence = max(longest_sequence, right - left + 1)
        return longest_sequence
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        left = 0
        right = 0
        n = len(nums)
        nums_zeros = 0
        continuous_ones = 0
        longest = 0
        while left < n and right < n:
            print(f"left: {left}, right: {right}")
            if nums[right] == 0:
                nums_zeros += 1
            continuous_ones += 1
            while nums_zeros > 1:
                left += 1
                continuous_ones -=1
                if nums[left] == 0:
                    nums_zeros -= 1
                    left += 1
                    continuous_ones -= 1
            print(f"left: {left}, right: {right}")
            longest = max(longest, continuous_ones)
            print(f"nums_zeros: {nums_zeros}, continuous_ones: {continuous_ones}, longest: {longest}")
            right += 1
        return longest
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        left, right = 0, 0
        n = len(nums)
        nums_zeros = 0
        longest = 0
        
        while right < n:
            # print(f"left: {left}, right: {right}")
            if nums[right] == 0:
                nums_zeros += 1
            
            while nums_zeros == 2:
                if nums[left] == 0:
                    nums_zeros -= 1
                left += 1
                
            # print(f"left: {left}, right: {right}")
            longest = max(longest, right - left + 1)
            # print(f"nums_zeros: {nums_zeros}, longest: {longest}")
            right += 1
            
        return longest
        
                    
                
                    
                    