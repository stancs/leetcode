// Last updated: 4/29/2026, 10:31:29 AM
/**
 * @param {string} s
 * @return {string[]}
 */
function removeInvalidParentheses(s) {
    const hash = {};
    
    let queue = [ s ];
    while(queue.size !== 0) {
        const next = [];
        
        for(const str of queue) {
            // If any string is valid, then return all valid string since we remove
            // the mininum number of invalid parenthesis
            if(isValid(str)) {
                return [...queue].filter(isValid);
            }
            
            for(let i = 0; i < str.length; i++) {
                const candidate = str.slice(0, i) + str.slice(i + 1);
                if(!hash[candidate]) {
                    next.push(candidate);
                    hash[candidate] = true;
                }
            }
        }
        queue = next;
    }
}

function isValid(str) {
    let bal = 0;
    for(let ch of str) {
        if(ch === '(') {
            bal++;
        } else if(ch === ')') {
            bal--;
        }
        if(bal < 0) {
            return false;
        }
    }
    return bal === 0;
}