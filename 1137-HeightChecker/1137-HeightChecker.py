# Last updated: 4/29/2026, 10:25:43 AM
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        sorted = []
        for height in heights:
            sorted.append(height)
        sorted.sort()
        
        print(sorted)
        count = 0
        for i in range(len(heights)):
            height = heights[i]
            sortedHeight = sorted[i]
            if(height != sortedHeight):
                count += 1
        
        return count