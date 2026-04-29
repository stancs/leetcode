// Last updated: 4/29/2026, 10:32:55 AM
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.trie;
    for(const ch of word) {
        if(!node[ch]) {
            node[ch] = {};
        } 
        node = node[ch];
    }
    node.word = true;
    
    // console.log(this.trie);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let node = this.trie;
    
    function find(curr, remain, node) {
        if(remain.length === 0) {
            if(node.word) {
                return true;
            } else {
                return false;
            }
        } 
        const ch = remain[0];
        if(ch === '.') {
            const keys = Object.keys(node);
            for(const key of keys) {
                if(key === 'word') {
                    continue;
                }
                const newCurr = curr.concat(key);
                const newRemain = remain.slice(1);
                if(find(newCurr, newRemain, node[key])) {
                    return true;
                }
            }    
        } else {
            if(node[ch]) {
                const newCurr = curr.concat(ch);
                const newRemain = remain.slice(1);
                return find(newCurr, newRemain, node[ch]);    
            } else {
                return false;
            }
        }
        return false;
    }
    
    return find('', word, node);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */