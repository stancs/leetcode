// Last updated: 4/29/2026, 10:32:56 AM

var Trie = function() {
    this.dic = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.dic;
    for(const ch of word) {
        if(curr[ch] === undefined) {
            curr[ch] = {};
        }
        curr = curr[ch];
    }
    curr['wordEnd'] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.dic;
    for(const ch of word) {
        if(curr[ch] === undefined) {
            return false;
        }
        curr = curr[ch];
    }
    return curr['wordEnd'] === true;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.dic;
    for(const ch of prefix) {
        if(curr[ch] === undefined) {
            return false;
        }
        curr = curr[ch];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */