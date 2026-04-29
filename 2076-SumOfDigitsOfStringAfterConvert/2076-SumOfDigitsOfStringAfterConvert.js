// Last updated: 4/29/2026, 10:22:07 AM
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  const chArray = 'abcdefghijklmnopqrstuvwxyz';
  const map = {};
  for(let i = 0; i < chArray.length; i++) {
    const ch = chArray[i];
    map[ch] = (i+1).toString();
  }
  console.log(map);
  let str = s.split('').map(ch => map[ch]).join('');
  console.log(str);
  for(let i = 0; i < k; i++) {
    const arr = str.split('').map(digitStr => parseInt(digitStr));
    console.log(arr);
    const sum = arr.reduce((acc, val) => acc + val, 0);
    str = sum.toString();
    console.log(str);
  }
  return parseInt(str);
};