// Last updated: 4/29/2026, 10:36:51 AM
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let modStr = str.trim();
    if(modStr.length === 0) {
        return 0;
    }    
    const firstChar = modStr[0];
    console.log(`firstChar=${firstChar}`);
    if(!isNumber(firstChar) && !isSign(firstChar)) {
        return 0;
    }
    console.log(`modStr: ${modStr}`);
    
    let validStr = '';
    for(let i = 0; i < modStr.length; i++) {
        const char = modStr[i];
        if(i === 0) {
            if(isSign(char) || isNumber(char)) {
                validStr += char;
            } else {
                break;
            }
        } else {
            if(isNumber(char)) {
                validStr += char;
            } else {
                break;
            }
        }
    }
    modStr = validStr;
    console.log(`modStr: ${modStr}`);
    
    if(modStr.length === 0 || modStr.split('').filter(char => isNumber(char)).length === 0 || modStr.split('').filter(char => isSign(char)).length > 1) {
        return 0;
    }
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    let num = Math.floor(Number(modStr));
    if(num <= INT_MAX) {
        if(num >= INT_MIN) {
            return num;
        } else {
            return INT_MIN;
        }
    } else {
        return INT_MAX;
    }
    
};

function isNumber(char) {
    return (char >= '0' && char <= '9') || char === '.';
}

function isSign(char) {
    return char === '+' || char === '-';
}

