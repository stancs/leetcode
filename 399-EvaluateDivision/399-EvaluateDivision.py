# Last updated: 4/29/2026, 10:30:37 AM
class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        from collections import defaultdict
        pathMap = defaultdict(set)
        valueMap = defaultdict(lambda: None)
        for idx, item in enumerate(equations):
            u, v = item
            pathMap[u].add(v)
            pathMap[v].add(u)
            key1 = str(u) + "-" + str(v)
            key2 = str(v) + "-" + str(u)
            valueMap[key1] = values[idx]
            valueMap[key2] = 1.0 / values[idx]
        print(pathMap)
        print(valueMap)
        
        def dfs(u, v, visited, val):
            if len(pathMap[u]) == 0:
                return -1.0
            if u == v:
                return 1.0
            visited[u] = True
            pathKey = u + "-" + v
            if valueMap[pathKey] != None:
                return val * valueMap[pathKey]
            for end in pathMap[u]:
                if not visited[end]:
                    key2 = u + "-" + end
                    newVal = val * valueMap[key2]
                    ret = dfs(end, v, visited, newVal)
                    if ret != -1.0:
                        return ret
            return -1.0
        res = []
        for u, v in queries:
            visited = defaultdict(lambda: False)
            val = dfs(u, v, visited, 1.0)
            res.append(val)
        return res