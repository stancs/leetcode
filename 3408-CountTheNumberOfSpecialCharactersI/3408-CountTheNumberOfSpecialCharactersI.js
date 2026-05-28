// Last updated: 5/27/2026, 11:06:53 PM
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    // const base = 'a'.charCodeAt(0);
    // const BASE = 'A'.charCodeAt(0);
    // const arr = new Array(26).fill(0);
    // const isLower = ch => ch.charCodeAt(0) >= base;
    // const getCharCode = ch => ch.
    // console.log(`base: ${base}, BASE: ${BASE}`)
    // let count = 0;
    // for(const ch of word) {
    //     if(isLower(ch)) {
    //         const idx = ch.charCodeAt(0) - base;
    //         if(arr[idx] === 0) {
    //             arr[idx] = 1;
    //         } else if(arr[idx] === 2) {
    //             arr[idx] = 3;
    //             count++;
    //         } else if(arr[idx] === 3) {
    //             continue;
    //         }
    //     } else {
    //         const idx = ch.charCodeAt(0) - BASE;
    //         if(arr[idx] === 0) {
    //             arr[idx] = 2;
    //         } else if(arr[idx] === 1) {
    //             arr[idx] = 3;
    //             count++;
    //         } else if(arr[idx] === 3) {
    //             continue;
    //         }
    //     }
    // }
    // return count;
    const lower = new Set();
    const upper = new Set();

    for(const ch of word) {
        if(ch >= 'a' && ch <= 'z') {
            lower.add(ch);
        } else {
            upper.add(ch.toLowerCase());
        }
    }

    let count = 0;
    for(const ch of lower) {
        if(upper.has(ch)) {
            count++;
        }
    }
    return count;
};