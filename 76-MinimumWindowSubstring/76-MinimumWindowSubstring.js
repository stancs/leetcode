// Last updated: 4/29/2026, 10:35:10 AM
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 3:00:00s
// 
const minWindow = function (s, t) {
    console.log(`s: ${s}`);
    console.log(`t: ${t}`);
    if (s.length === 0 || t.length === 0)
        return ""
    let hash = {};
    for(const char of t) {
        if(hash[char] !== undefined) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    let total = t.length;
    let from = 0;
    let min = Number.MAX_VALUE;
    const strHash = {};
    for (let i = 0, j = 0; i < s.length; i++) {
        const char = s[i];
        console.log(`char: ${char}`);
        if(hash[char]) {
            if(strHash[char] !== undefined) {
                strHash[char]++;
            } else {
                strHash[char] = 1;
            }
        }
        while (containsAll(strHash, hash)) {
            if (i - j + 1 < min) {
                min = i - j + 1
                from = j
                console.log(`min str: ${s.substring(from, from + min)}`);
            }
            const newLeftChar = s[j];
            j++;
            if(strHash[newLeftChar]) {
                strHash[newLeftChar]--;
            }
        }
    }
    return (min === Number.MAX_VALUE) ? "" : s.substring(from, from + min)
}

function containsAll(strHash, hash) {
    for(const char in hash) {
        if(!strHash[char]) {
            return false;
        } else {
            if(strHash[char] < hash[char]) {
                return false;
            }
        }
    }
    return true;
}

/*
const minWindow = function (s, t) {
    if (s.length === 0 || t.length === 0)
        return ""
    let count = new Array(128)
    for (let i = 0; i < 128; i++) {
        count[i]=0
    }
    for (let i = 0; i < t.length; i++) {
        count[t.charCodeAt(i)]+=1
    }
    let total = t.length,
        from = 0,
        min = Number.MAX_VALUE
    for (let i = 0, j = 0; i < s.length; i++) {
        if (count[s.charCodeAt(i)]-- > 0) total--
        while (total === 0) {
            if (i - j + 1 < min) {
                min = i - j + 1
                from = j
            }
            if (++count[s.charCodeAt(j++)] > 0) total++
        }
    }
    return (min === Number.MAX_VALUE) ? "" : s.substring(from, from + min)
}
*/

/*
var minWindow = function(s, t) {
    let left = 0, right = 0;
    const hash = {};
    for(const char of t) {
        if(hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    let count = t.length;
    console.log(hash);
    console.log(`count=${count}`)
    let min = s.length + 1;
    let str = '';
    while(right < s.length) {
        // console.log(`str=${s.slice(left, right+1)}, t=${t}, left=${left}, right=${right}`);
        // console.log(`min str=${str}`);
        const doesContainAll = containsAll(s, hash, count, left, right);
        // console.log(`containsAll: ${doesContainAll}`);          
        if(doesContainAll) {
            const len = right - left + 1;
            if(len < min) {
                min = len;
                str = s.slice(left, right+1);
            }
            left++;
        } else {
            right++;
        }
    }
    return str;
}

function containsAll(s, hash, count, left, right) {
    const tempHash = { ...hash };
    const str = s.slice(left, right + 1);
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if(count > str.length - i) {
            return false;
        }
        if(tempHash[char] !== undefined && tempHash[char] > 0) {
            count--;
            tempHash[char]--;
            if(count === 0) {
                return true;
            }
        }
    }
    return false;
}
*/
    
/*
var minWindow = function(s, t) {
    const hash = {};
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(t.includes(char)) {
            if(hash[char]) {
                hash[char].push(i);
            } else {
                hash[char] = [i];
            }
            console.log(hash);
        }
    }
    const keys = Object.keys(hash);
    if(keys.length !== t.length) {
        return '';
    }
    const idxArr2D = keys.map(key => hash[key]);
    console.log(idxArr2D);
    const window = {
        min: -1,
        max: -1,
        len: Infinity,
    };
    permute([], idxArr2D, window);
    if(window.len === -1) {
        return '';
    } else {
        const output = s.slice(window.min, window.max + 1);
        return output;
    }
};

function permute(idxArr, idxArr2D, window) {
    if(idxArr2D.length === 0) {
        const min = Math.min(...idxArr);
        const max = Math.max(...idxArr);
        const len = max - min + 1;
        console.log(`${idxArr} min=${min}, max=${max}, len=${len}`)
        if(len < window.len) {
            window.len = len;
            window.min = min;
            window.max = max;
        }
    } else {
        const [arr] = idxArr2D;
        for(let i = 0; i < arr.length; i++) {
            const idx = arr[i];
            const newIdxArr = idxArr.concat(idx);
            const newIdxArr2D = idxArr2D.slice(1);
            permute(newIdxArr, newIdxArr2D, window);
        }
    }
}
*/