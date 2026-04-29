// Last updated: 4/29/2026, 10:24:34 AM
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const initIdx = 'a'.charCodeAt(0);
    // console.log(`init idx: ${initIdx}`)
    const trie = new Array(27).fill(undefined);
    const createTrie = arr => {
        for(const word of arr) {
            let curr = trie;
            // console.log(`word: ${word}`)
            for(const ch of word) {
                // console.log(`ch: ${ch}`)
                const idx = ch.charCodeAt(0) - initIdx;
                // console.log(`idx: ${idx}`)
                if(!curr[idx]) {
                    // console.log('CREATE NEW ARRAY')
                    curr[idx] = new Array(27).fill(undefined)
                }
                curr = curr[idx];                
            }
            // console.log(`end word`)
            curr[26] = 1;
        }
    }
    createTrie(products);
    // console.log(trie)

    const dfs = (prefix, curr, list) => {
        if(curr[26]) {
            if(list.length < 3) {
                list.push(prefix);
            } else {
                return;
            }
        }
        for(let i = 0; i < 26; i++) {
            const ch = String.fromCharCode(initIdx + i);
            if(curr[i]) {      
                dfs(prefix + ch, curr[i], list);
            }
        }
    }
    const listProducts = prefix => {
        let curr = trie;
        let continueSearch = true;
        for(const ch of prefix) {
            // console.log(`ch: ${ch}`)
            const idx = ch.charCodeAt(0) - initIdx;
            // console.log(`idx: ${idx}`)
            if(!curr[idx]) {
                continueSearch = false;
                break;
            }
            curr = curr[idx];  
        }
        let list = [];
        if(continueSearch) {
            dfs(prefix, curr, list);
        }
        return list;
    }

    const output = [];
    for(let i = 1; i <= searchWord.length; i++) {
        const prefix = searchWord.slice(0, i);
        // console.log(`prefix: ${prefix}`)
        const listWords = listProducts(prefix);
        // console.log(`listWords:`)
        // console.log(listWords);
        output.push(listWords);
    }
    return output;
};