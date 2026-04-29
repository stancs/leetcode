// Last updated: 4/29/2026, 10:29:07 AM
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  
    const charMap = new Map();
    let maxCharCount = 0;
    let maxChar = tasks[0];
    
    for(let char of tasks) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
        if(charMap.get(char) > maxCharCount) {
            maxCharCount = charMap.get(char);
            maxChar = char;
        }
    }
    
    let idleCount = (maxCharCount - 1) * n;
    
    charMap.forEach((count, char) => {
        // 'return' inside forEach() serve as 'continue'
        if(char === maxChar) return;
        if(count === maxCharCount) idleCount -= (count - 1);
        else idleCount -= count;
    })
    
    if(idleCount <= 0) return tasks.length;
    return tasks.length + idleCount;
};
/*
var leastInterval = function(tasks, n) {
    console.log(`task len: ${tasks.length}`);
    const freqHash = {};
    for(const task of tasks) {
        if(freqHash[task] !== undefined) {
            freqHash[task]++;
        } else {
            freqHash[task] = 1;
        }
    }
    console.log(freqHash);
    const keys = Object.keys(freqHash);
    keys.sort((a,b) => freqHash[b] - freqHash[a]);
    console.log(`sorted keys: ${keys}`);
    
    let arr;
    for(let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if(i === 0) {
            const freq = freqHash[key];
            const len = (freq - 1) * (n + 1) + 1;
            arr = new Array(len).fill(null);
            for(let i = 0; i < arr.length; i += n + 1) {
                arr[i] = key;
            }
        } else {
            const freq = freqHash[key];
            
            let idx = 0;
            let count = 0;
            while(count < freq) {
                // console.log(`count=${count}, freq=${freq}`);
                // console.log(`idx=${idx}`);
                if(idx >= arr.length) {
                    while(idx >= arr.length) {
                        arr.push(null);
                    }
                }
                if(arr[idx] !== null) {
                    idx++;
                } else {
                    arr[idx] = key;
                    idx += n + 1;
                    count++;
                }
            }
        }
    }
    console.log(arr);
    return arr.length;
    
};
*/

// function permute(count, work, freqHash, hash) {
//     const keys = Object.keys(keys);
//     for(const key of keys) {
//         if(freq[key] > 0) {
//             hash[key] = work.length;
//             work.
//         }
//     }
// }