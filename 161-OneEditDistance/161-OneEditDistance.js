// Last updated: 4/29/2026, 10:33:34 AM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    const lenS = s.length;
    const lenT = t.length;
    if(lenS === 0 && lenT === 0) {
        return false;
    }
    let allowance = 0;
    if(Math.abs(lenS - lenT) > 1) {
        return false;
    } else if(lenS === lenT) {
        for(let i = 0; i < lenS; i++) {
            if(s[i] !== t[i]) {
                if(allowance === 0) {
                    allowance++;
                } else{
                    return false;
                }
            }
        }
        return allowance === 1;
    } else {
        let short, long;
        if(lenS > lenT) {
            short = t;
            long = s;
        } else {
            short = s;
            long = t;
        }
        if(short.length === 0) {
            return true;
        }
        
        
        let i = 0;
        while(i < short.length) {
            if(short[i] !== long[i + allowance]) {
                if(allowance === 0) {
                    allowance++;
                } else {
                    return false;
                }
            } else {
                i++;
            }
        }
        return true;
    }   
};