// Last updated: 4/29/2026, 10:31:02 AM
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// TC: O(n)
// SC: O(1)
// var reverseString = function(s) {
//     for(let i = 0; i < (s.length / 2); i++) {
//         const ch = s[i];
//         s[i] = s[s.length - 1 - i];
//         s[s.length - 1 - i] = ch;
//     }
// };

var reverseString = function(s) {
    helper(0, s.length - 1, s);
};

function helper(start, end, s) {
    if(start >= end) {
        return;
    }
    
    const tmp = s[end];
    s[end] = s[start];
    s[start] = tmp;
    
    helper(start + 1, end - 1, s);
}

// 2022-11-14
// 1:00s
// O(n)
// O(1)
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        const tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
        left++;
        right--;
    }
};