# Last updated: 4/29/2026, 10:25:33 AM
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] == 1:
            return -1
        
        n = len(grid)
        
        def valid(i, j):
            return i >= 0 and i < n and j >= 0 and j < n and grid[i][j] == 0
        
        def neighbors(i, j):
            return [[i, j+1], [i+1, j+1], [i+1, j], [i+1, j-1], [i, j-1], [i-1, j-1], [i-1, j], [i-1, j+1]]
        
        visited = [None] * n
        for i in range(n):
            visited[i] = [False] * n
        
        print(visited)
        def bfs(i, j):
            queue = [[i, j]]
            dist = 1
            while len(queue) != 0:
                nextQueue = []
                for i, j in queue:
                    if i == n-1 and j == n-1:
                        return dist
                    next_cells = neighbors(i, j)
                    for x, y in next_cells:
                        if valid(x, y) and not visited[x][y]:
                            visited[x][y] = True
                            nextQueue.append([x, y])
                dist += 1
                queue = nextQueue
            return -1
                
        
        return bfs(0, 0)