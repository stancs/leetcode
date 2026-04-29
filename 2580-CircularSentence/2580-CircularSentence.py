# Last updated: 4/29/2026, 10:20:12 AM
# 6:52s
# O(n)
# O(1)
class Solution:
    def isCircularSentence(self, sentence: str) -> bool:
        l = sentence.split()
        print(l)
        n = len(l)
        
        def nextIdx(i):
            return (i + 1) % n
        
        for i in range(n):
            curr = l[i]
            next = l[nextIdx(i)]
            if curr[-1] != next[0]:
                return False
        
        return True