# Last updated: 4/29/2026, 10:29:34 AM
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        map = {}
        def connect(i, j):
            if map.get(i) == None:
                map[i] = {j}
            else:
                map[i].add(j)
            if map.get(j) == None:
                map[j] = {i}
            else:
                map[j].add(i)
                
        for i in range(n):
            for j in range(n):
                if i != j and isConnected[i][j] == 1:
                    connect(i,j)
        
        print(map)
            
        arr = [-1 for element in range(n)]
        group = 0
        def dfs(i, group, arr):
            if arr[i] != -1:
                return
            arr[i] = group
            ends = map.get(i)
            if ends != None:
                for end in ends:
                    dfs(end, group, arr)
                    
        for i in range(n):
            if arr[i] == -1:
                dfs(i, group, arr)
                group += 1
        
        return group