// Last updated: 4/29/2026, 10:28:27 AM
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const dict = {};
    for(const word of words) {
        insert(word, dict);
    }
    console.log(dict);
    const longest = { word: '' };
    dft('', dict, longest);
    return longest.word;
};

function insert(word, dict) {
    let node = dict;
    for(const char of word) {
        if(!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    node.word = true;
}

function dft(curr, node, longest) {
    if(curr.length !== 0) {
        if(node.word === true) {
            if(curr.length > longest.word.length) {
                longest.word = curr;
            } else if(curr.length === longest.word.length) {
                if(curr < longest.word) {
                    longest.word = curr;
                }
            }
        } else {
            return;
        }
    } 
    console.log(`longest: ${longest}`);
    const keys = Object.keys(node);
    console.log(`keys: ${keys}`);
    for(const key of keys) {
        if(key !== 'word') {
            const newCurr = curr.concat(key);
            const newNode = node[key];
            dft(newCurr, newNode, longest);
        }
    }
}