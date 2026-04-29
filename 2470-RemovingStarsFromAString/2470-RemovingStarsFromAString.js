// Last updated: 4/29/2026, 10:20:27 AM
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let str = s;
    const stack = [];
    while(str.length > 0) {
        const ch = str[0];
        if(ch === '*') {
            stack.pop();
        } else {
            stack.push(ch);
        }
        str = str.slice(1);
    }
    return stack.join('');
    // const arr = s.split('');
    // const stack = [];
    // while(arr.length > 0) {
    //     const ch = arr[0];
    //     if(ch === '*') {
    //         stack.pop();
    //     } else {
    //         stack.push(ch);
    //     }
    //     arr.shift();
    // }
    // return stack.join('');
};