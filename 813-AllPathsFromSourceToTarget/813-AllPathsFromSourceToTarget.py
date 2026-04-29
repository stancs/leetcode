# Last updated: 4/29/2026, 10:27:39 AM
class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        n = len(graph)
        path_list = []
        
        def dfs(start, final_end, path, visited, l):
            if start == final_end:
                l.append(path)
                return
            visited.add(start)
            for end in graph[start]:
                if not end in visited:
                    new_path = path + [end]
                    dfs(end, final_end, new_path, visited.copy(), l)
            
        
        dfs(0, n-1, [0], set(), path_list);
        return path_list
    
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        n = len(graph)
        path_list = []
        
        def backtrack(start, final_end, path, visited, l):
            if start == final_end:
                l.append(path)
                return
            visited.add(start)
            for end in graph[start]:
                if not end in visited:
                    new_path = path + [end]
                    backtrack(end, final_end, new_path, visited, l)
            path.pop()
            visited.remove(start)
            
        
        backtrack(0, n-1, [0], set(), path_list);
        return path_list
    
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        target = len(graph) - 1
        res = []
        
        def backtrack(curr_node, path, visited):
            if curr_node == target:
                res.append(list(path))
                return
            visited.add(curr_node)
            for next_node in graph[curr_node]:
                if not next_node in visited:
                    path.append(next_node)
                    backtrack(next_node, path, visited)
                    path.pop()
            visited.remove(curr_node)
            
        
        backtrack(0, [0], set());
        return res