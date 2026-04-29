# Last updated: 4/29/2026, 10:32:50 AM
class WordDictionary:

    def __init__(self):
        self.root = {}

    def addWord(self, word: str) -> None:
        node = self.root
        for ch in word:
            if node.get(ch) == None:
                node[ch] = {}
            node = node[ch]
        node['completed'] = word
        # print(self.root)

    def search(self, word: str) -> bool:
        node = self.root
        queue = [ node ]
        idx = 0
        while len(queue) != 0 and idx < len(word):
            next_queue = []
            ch = word[idx]
            # print(ch)
            for node in queue:
                if ch == '.':
                    for next_ch in node:
                        if next_ch != 'completed':
                            next_queue.append(node[next_ch])
                else:
                    if node.get(ch) != None:
                        next_queue.append(node[ch])
            queue = next_queue
            idx += 1
        
        if idx == len(word):
            for node in queue:
                if node.get('completed') != None:
                    # print("return True")
                    return True
        else:
            # print("return False")
            return False
        
                
            
        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)