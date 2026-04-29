// Last updated: 4/29/2026, 10:36:59 AM
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) {
        return 0;
    }
    let left = 0;
    let right = 0;
    const map = {};
    let maxLen = 1;
    map[s[0]] = 1;
    const check = map => {
        const values = Object.values(map);
        return values.every(val => val <= 1);
    }
    const update = (ch, map) => {
        if(map[ch] === undefined) {
            map[ch] = 1;
        } else {
            map[ch]++;
        }
    }
    const remove = (ch, map) => {
        map[ch]--;
        if(map[ch] === 0) {
            delete map[ch];
        }
    }
    while(right < s.length) {
        if(check(map)) {
            const len = right - left + 1;
            if(len > maxLen) {
                maxLen = len;
            }
            right++;
            const ch = s[right];
            update(ch, map);   
        } else {
            while(!check(map)) {
                const ch = s[left];
                remove(ch, map);
                left++;
            }
            const len = right - left + 1;
            if(len > maxLen) {
                maxLen = len;
            }
        }
    }
    return maxLen;
};