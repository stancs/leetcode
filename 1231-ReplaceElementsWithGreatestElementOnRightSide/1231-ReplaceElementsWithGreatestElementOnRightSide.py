# Last updated: 4/29/2026, 10:25:18 AM
class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        currMax = -1
        for i in range(len(arr)-1, -1, -1):
            tmpMax = max(currMax, arr[i])
            arr[i] = currMax
            currMax = tmpMax
        print(arr)
        return arr