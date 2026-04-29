# Last updated: 4/29/2026, 10:30:48 AM
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        left = 1
        right = n
        while left <= right:
            mid = (left + right) // 2
            print(f"left: {left}, mid: {mid}, right: {right}")
            if guess(mid) == 0:
                return mid
            if guess(mid) < 0:
                right = mid - 1
            else:
                left = mid + 1
        print(f"left: {left}, right: {right}")
        return -1
        