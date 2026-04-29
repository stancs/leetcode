# Last updated: 4/29/2026, 10:22:06 AM
class Solution:
    def isThree(self, n: int) -> bool:
        divisors = set()
        i = n
        while i >= 1:
            if n % i == 0:
                divisors.add(i)
                divisors.add(n // i)
            if len(divisors) > 3:
                return False
            i -= 1
        return len(divisors) == 3