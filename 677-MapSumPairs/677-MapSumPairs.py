# Last updated: 4/29/2026, 10:28:50 AM
"""
59:19s

"""
class MapSum:

    def __init__(self):
        self.root = {}

    def insert(self, key: str, val: int) -> None:
        node = self.root
        for ch in key:
            if node.get(ch) == None:
                node[ch] = {}
            node = node[ch]
        node['val'] = val

    def sum(self, prefix: str) -> int:
        total = 0
        node = self.root
        for ch in prefix:
            print(f"1: {ch}")
            if node.get(ch) == None:
                return 0
            node = node[ch]
        queue = [ node ]
        while len(queue) != 0:
            nextQueue = []
            for n in queue:
                if n.get('val'):
                    print(f"val: {n.get('val')}")
                    total += n.get('val')
                for ch in n:
                    print(f"2: {ch}")
                    if ch != 'val':
                        nextQueue.append(n[ch])
            queue = nextQueue
        return total
        


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)