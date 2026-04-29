// Last updated: 4/29/2026, 10:30:34 AM
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const digits = '1234567890';
    const isDigit = ch => {
        return digits.includes(ch);
    }
    const includesOnlyAlpha = str => {
        for(let i = 0; i < str.length; i++) {
            const ch = str[i];
            if(digits.includes(ch)) {
                return false;
            }
        }
        return true;
    }
    // console.log(includesDigits('a23'))
    // console.log(includesDigits('abcddfdf'))
    const decode = (freq, str) => {
        if(includesOnlyAlpha(str)) {
            return str.repeat(freq);
        } else {

        }
    }

    const countStack = [];
    const strStack = [];   
    let currStr = '';
    let k = 0;

    for(let i = 0; i < s.length; i++) {
        const ch = s[i];
        console.log(`==== ch: ${ch} ====`)
        
        if(isDigit(ch)) {
            k = 10 * k + parseInt(ch);
        } else if(ch === '[') {
            countStack.push(k);
            strStack.push(currStr);
            k = 0;
            currStr = '';
        } else if(ch === ']') {
            const repeatNum = countStack.pop();
            const lastStr = strStack.pop();
            currStr = lastStr + currStr.repeat(repeatNum);
        } else {
            currStr += ch;
        }
        console.log(`currStr: ${currStr}`)
        console.log(`k: ${k}`)
        console.log(`countStack: ${countStack}`)
        console.log(`strStack: ${strStack}`)
    }
    return currStr;
};