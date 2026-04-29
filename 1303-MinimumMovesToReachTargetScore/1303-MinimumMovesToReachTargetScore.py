# Last updated: 4/29/2026, 10:24:58 AM
class Solution:
    def minMoves(self, target: int, maxDoubles: int) -> int:
        count = 0
        while target > 1:
            if target % 2 == 0:
                if maxDoubles > 0:
                    target /= 2
                    maxDoubles -= 1
                else:
                    return int(count + target - 1)
            else:
                if maxDoubles > 0:
                    target -= 1
                else:
                    return int(count + target - 1)
            count += 1
        return count
                    