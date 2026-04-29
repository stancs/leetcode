// Last updated: 4/29/2026, 10:21:14 AM
/**
 * @param {string} s
 * @return {string[]}
 */
// 2022-11-01
// 20:00s
// O(r*c)
// O(r*c)
var cellsInRange = function(s) {
    const [c1r1, c2r2] = s.split(':');
    const [num1, alpha1] = splitColRow(c1r1);
    const [num2, alpha2] = splitColRow(c2r2);
    const alphaStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let alphaIdx1, alphaIdx2;
    for(let i = 0; i < alphaStr.length; i++) {
        const ch = alphaStr[i];
        if(ch === alpha1) {
            alphaIdx1 = i;
        }
        if(ch === alpha2) {
            alphaIdx2 = i;
        }
    }
    const output = [];
    for(let i = alphaIdx1; i <= alphaIdx2; i++) {
        const ch = alphaStr[i];
        for(let j = num1; j <= num2; j++) {
            output.push(`${ch}${j}`);
        }
    }
    return output;
};

function splitColRow(colrow) {
    const regexNumber = /\d+/;
    const regexAlpha = /[A-Z]+/;
    const matchesNumber = colrow.match(regexNumber);
    const matchesAlpha = colrow.match(regexAlpha);
    // console.log(matchesNumber[0]);
    // console.log(matchesAlpha[0]);
    return [parseInt(matchesNumber[0]), matchesAlpha[0]];
}
