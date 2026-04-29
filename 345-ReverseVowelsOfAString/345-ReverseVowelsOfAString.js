// Last updated: 4/29/2026, 10:30:54 AM
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const isVowel = char => {
        return 'aeiouAEIOU'.includes(char);
    }
    const arr = s.split('');
    const vList = arr.filter(char => isVowel(char));
    console.log(vList);
    const rev = vList.reverse();

    let rIdx = 0;
    for(let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if(isVowel(char)) {
            arr[i] = rev[rIdx];
            rIdx++;
        }
    }
    const res = arr.join('');
    return res;
};