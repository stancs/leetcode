// Last updated: 4/29/2026, 10:34:15 AM
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const canBeNext = (src, candidate) => {
        let count = 0;
        for(let i = 0; i < src.length; i++) {
            if(src[i] !== candidate[i]) {
                count++;
                if(count > 1) {
                    return false;
                }
            }
        }
        return true;
    }
    const visited = {};
    let queue = [ beginWord ];
    let count = 1;
    while(queue.length > 0) {
        const nextQueue = [];
        if(queue.includes(endWord)) {
            return count;
        }
        for(const node of queue) {
            if(!visited[node]) {
                const candidates = wordList.filter(word => canBeNext(node, word));
                nextQueue.push(...candidates);
                visited[node] = true;
            }    
        }
        count++;
        queue = nextQueue;
    }
    return 0;
};