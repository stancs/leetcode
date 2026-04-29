# Last updated: 4/29/2026, 10:31:50 AM
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        left = 1
        right = n
        while left < right:
            mid = (left + right) // 2
            print(f"{left}\t{mid}\t{right}")
            if isBadVersion(mid):
                right = mid
            else:
                left = mid + 1
        print(f"Final: {left}\t{right}")
        return left