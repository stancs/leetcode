# Last updated: 4/29/2026, 10:21:55 AM
class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        from collections import defaultdict
        hash = defaultdict(set)
        for u, v in edges:
            hash[u].add(v)
            hash[v].add(u)
        print(hash)
        def dft(hash, visited, start, final_end):
            if start == final_end:
                return True
            visited[start] = True
            for end in hash[start]:
                if visited[end] == False:
                    if dft(hash, visited, end, final_end):
                        return True
                    
        
        visited = [ False ] * n
        return dft(hash, visited, source, destination)