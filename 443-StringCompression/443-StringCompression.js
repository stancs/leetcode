// Last updated: 4/29/2026, 10:30:10 AM
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const arr = [];
    let count = -1;
    let prev;
    for(const ch of chars) {
        if(ch !== prev) {
            if(count > 1) {
                arr.push(...count.toString().split(''));
            }
            count = 1;
            arr.push(ch);
        } else {
            count++;
        }
        prev = ch;
    }
    console.log(arr);
    if(count > 1) {
        arr.push(...count.toString().split(''));
    }
    for(let i = 0; i < arr.length; i++) {
        chars[i] = arr[i];
    }
    return arr.length;
};