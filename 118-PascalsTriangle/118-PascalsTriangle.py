# Last updated: 4/29/2026, 10:34:27 AM
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        def getValue(l, idx):
            if idx < 0 or idx >= len(l):
                return 0
            return l[idx]
        
        res = []
        def generateNextRow(prev_list):
            n = len(prev_list)
            arr = []
            for i in range(n+1):
                arr.append(getValue(prev_list, i-1) + getValue(prev_list, i))
            return arr
        row = None
        for i in range(1, numRows+1):
            if i == 1:
                row = [1]
            else:
                row = generateNextRow(row)
            res.append(row)
            # print(i)
            # print(row)
        return res