# Last updated: 4/29/2026, 10:20:10 AM
class Solution:
    def closetTarget(self, words: List[str], target: str, startIndex: int) -> int:
        n = len(words)
        i1 = startIndex
        i2 = startIndex
        count = 0
        maxCount = n // 2 + 1
        while count < maxCount:
            if words[i1] == target or words[i2] == target:
                return count
            i1 = (i1+1) % n
            i2 = (i2-1+n) % n
            count += 1
        return -1
            