# Last updated: 4/29/2026, 10:32:05 AM
class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        adj = {}
        for start, end in edges:
            if adj.get(start) == None:
                adj[start] = set()
            adj[start].add(end)
            if adj.get(end) == None:
                adj[end] = set()
            adj[end].add(start)
        visited = set()
        
        queue = [0]
        while len(queue) != 0:
            newQueue = []
            for start in queue:
                if start in visited:
                    return False
                visited.add(start)
                ends = adj.get(start)
                if ends != None:
                    for end in ends:
                        newQueue.append(end)
                        adj[end].remove(start)
            queue = newQueue
        return len(visited) == n
                