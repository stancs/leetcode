# Last updated: 4/29/2026, 10:33:03 AM
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        from collections import defaultdict
        adj = defaultdict(set)
        for end, start in prerequisites:
            adj[start].add(end)
        print(adj)
        
        checked = [False] * numCourses
        path = [False] * numCourses
        
        for i in range(numCourses):
            if self.isCyclic(i, adj, checked, path):
                return False
        return True
    
    def isCyclic(self, i, adj, checked, path):
        if checked[i]:
            return False
        if path[i]:
            return True
        path[i] = True
        ret = False
        for child in adj[i]:
            ret = self.isCyclic(child, adj, checked, path)
            if ret:
                break
        
        path[i] = False
        
        checked[i] = True
        return ret
        