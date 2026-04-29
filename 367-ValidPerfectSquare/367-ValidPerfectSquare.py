# Last updated: 4/29/2026, 10:30:44 AM
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num == 1:
            return True
        left = 0
        right = num // 2
        while left <= right:
            mid = (left + right) // 2
            print(f"{left}\t{mid}\t{right}")
            if mid * mid == num:
                return True
            elif mid * mid < num:
                left = mid + 1
            else:
                right = mid - 1
        return False
    