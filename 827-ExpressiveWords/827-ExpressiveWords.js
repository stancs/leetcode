// Last updated: 4/29/2026, 10:27:28 AM
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(s, words) {
    const convert = src => {
        const arr = [];
        let idx = 0;
        let ch = src[idx];
        let count = 1;
        while(idx < src.length) {
            const next = idx + 1 < src.length? src[idx + 1]: null;
            if(next === ch) {
                count++;
            } else {
                arr.push(ch);
                arr.push(count);
                ch = next;
                count = 1;
            }
            idx++;
            ch = src[idx];
        }
        return arr;
    }
    
    const isStretchy = (sArr, wordArr) => {
        if(sArr.length !== wordArr.length) {
            return false;
        }
        for(let i = 0; i < sArr.length - 1; i = i+2) {
            const sCh = sArr[i];
            const sNum = sArr[i+1];
            const wCh = wordArr[i];
            const wNum = wordArr[i+1];
            console.log(`sCh: ${sCh}, sNum: ${sNum}, wCh: ${wCh}, wNum: ${wNum}`);
            if(sCh !== wCh) {
                return false;
            }
            if(!(sNum === wNum || (sNum > wNum && sNum >= 3))) {
                return false;
            }
        }
        return true;
    }
    
    const sConvert = convert(s);
    console.log(sConvert);
    let count = 0;
    for(const word of words) {
        // console.log(convert(word));
        const wordConvert = convert(word);
        console.log(wordConvert);
        if(isStretchy(sConvert, wordConvert)) {
            console.log('return TRUE')
            count++;
        }
    }
    return count;
};