# Last updated: 4/29/2026, 10:28:40 AM
class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        curr = n
        prev = -1;
        while curr > 0:
            remainder = curr % 2
            print(f"curr: {curr}, remainder: {remainder}")
            if prev == remainder:
                return False
            curr = int((curr - remainder) / 2)
            prev = remainder
        return True
            