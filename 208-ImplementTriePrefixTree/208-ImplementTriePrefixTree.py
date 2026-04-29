# Last updated: 4/29/2026, 10:33:01 AM
class Trie:

    def __init__(self):
        self.root = {}

    def insert(self, word: str) -> None:
        # print(word)
        node = self.root
        for ch in word:
            if node.get(ch) == None:
                node[ch] = {}
            node = node[ch]
        node['complete'] = True
        # print(self.root)

    def search(self, word: str) -> bool:
        node = self.root
        for ch in word:
            if node.get(ch) == None:
                return False;
            node = node[ch]
        if node.get('complete') == True:
            return True
        else: 
            return False

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for ch in prefix:
            if node.get(ch) == None:
                return False;
            node = node[ch]
        return True
        
# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)