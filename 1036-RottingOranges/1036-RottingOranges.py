# Last updated: 4/29/2026, 10:26:19 AM
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        
        visited = [[False]*n for i in range(m)]
        
        queue = []
        count = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    queue.append([i, j])
                    visited[i][j] = True
                if grid[i][j] == 1:
                    count += 1
        
        print(queue)
        print(count)
        
        if count == 0:
            return 0
        
        def valid(i, j):
            return i >= 0 and i < m and j >= 0 and j < n and grid[i][j] == 1
            
        def neighbors(i, j):
            return [[i+1, j], [i-1, j], [i, j+1], [i, j-1]]
        
        t = 0
        while len(queue) != 0:
            next_queue = []
            t += 1
            for i, j in queue:
                next_list = neighbors(i, j)
                for x, y in next_list:
                    if valid(x, y) and visited[x][y] == False:
                        print(f"valid + never visited: {x},{y}")
                        visited[x][y] = True
                        count -= 1
                        if count == 0:
                            return t
                        next_queue.append([x, y])
            queue = next_queue
        return -1
                    