# Last updated: 4/29/2026, 10:31:18 AM
class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        from collections import defaultdict
        adj = defaultdict(set)
        
        for u, v in edges:
            adj[v].add(u)
            adj[u].add(v)
        
        count = 0
        visited = [False] * n
        
        def dfs(i):
            if not visited[i]:
                visited[i] = True
                for end in adj[i]:
                    dfs(end)
        
        for i in range(n):
            if not visited[i]:
                dfs(i)
                count += 1
        
        return count