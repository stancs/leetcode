// Last updated: 4/29/2026, 10:35:20 AM
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const wordsLen = words.length;
    let idx = 0;
    let charCount = 0;
    let candidate = [];
    const output = [];
    while(idx < wordsLen) {
        const word = words[idx];
        console.log(`word: ${word}`)
        console.log(`curr char count: ${charCount}`)
        console.log(`curr candidate: ${candidate}`);
        let newCharCount = charCount + word.length;
        if(candidate.length > 0) {
            // Consider a blank before the word
            newCharCount++;
        } 
        console.log(`new char count: ${newCharCount}`)
        if(newCharCount <= maxWidth) {
            if(candidate.length > 0) {
                candidate.push(' ');
            } 
            candidate.push(word);
            charCount = newCharCount;
            idx++;
        } else {
            // reorganize
            const candidateLen = candidate.length;
            if(candidateLen > 1) {
                let blankIdx = 1;
                while(charCount < maxWidth) {
                    candidate[blankIdx] = candidate[blankIdx] + ' ';
                    blankIdx += 2;
                    if(blankIdx >= candidateLen) {
                        blankIdx = 1;
                    }
                    charCount++;
                }
                console.log(`reorganize- candidate: ${candidate}`)
                const str = candidate.join('');
                console.log(`str: ${str}`)
                output.push(str);
            } else {
                console.log('only one word')
                const remainingSpaceCount = maxWidth - candidate[0].length;
                const blanks = ' '.repeat(remainingSpaceCount);
                const str = candidate[0] + blanks;
                console.log(`str: ${str}`)
                output.push(str);
            }
            charCount = 0;
            candidate = [];
        }
    }
    const candidateLen = candidate.length;
    const str1 = candidate.join('');
    const spaceCount = maxWidth - str1.length;
    const str2 = str1 + ' '.repeat(spaceCount);
    output.push(str2);
    return output;
};