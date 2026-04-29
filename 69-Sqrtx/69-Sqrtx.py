# Last updated: 4/29/2026, 10:35:19 AM
"""
1 2 3 4  5
1 4 9 16 25

1 8
1 7 4
"""
class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x
        left = 2
        right = x // 2
        while left <= right:
            mid = (left + right) // 2
            print(f"left: {left}, right: {right}, mid: {mid}")
            if mid*mid == x:
                return mid
            if mid*mid < x:
                left = mid + 1
            else:
                right = mid - 1
        
        print(f"<final> left: {left}, right: {right}")
        return right
        