// Last updated: 4/29/2026, 10:26:00 AM
/**
 * @param {string} S
 * @return {string}
 */
// 1:00s
var removeVowels = function(S) {
    return S.split('').filter(char => !'aeiou'.includes(char)).join('');
};