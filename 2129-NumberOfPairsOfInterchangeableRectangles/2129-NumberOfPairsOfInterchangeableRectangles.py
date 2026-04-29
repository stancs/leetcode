# Last updated: 4/29/2026, 10:21:53 AM
class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        hash = {}
        for i in range(len(rectangles)):
            w, h = rectangles[i]
            # print(f"{w}, {h}")
            r = w / h
            if hash.get(r) == None:
                hash[r] = [i]
            else:
                hash[r].append(i)
        print(hash)
        count = 0
        for l in hash.values():
            n = len(l)
            if n > 1:
                count += int(n * (n-1) / 2)
            
        return count
    