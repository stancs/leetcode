// Last updated: 4/29/2026, 10:30:19 AM
/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
    // const mat = new Array(rows).fill(null).map(() => new Array(cols).fill('-'));
    // console.log(mat);
    
    let count = 0;
    
    let px = 0, py = 0;
    let wordIdx = 0;
    while(px < rows && wordIdx < sentence.length) {
        // console.log(`px: ${px}, py: ${py}`);
        const word = sentence[wordIdx];
        // console.log(`word: ${word}`);
        const remainSpaces = cols - py;
        if(remainSpaces >= word.length) {
            for(let i = 0; i < word.length; i++) {
                // mat[px][py+i] = word[i];
                // console.log(`mat[${px}][${py}] = ${word[i]}`)
            }
            py += word.length;
            if(py < cols) {
                py++;
            }
            wordIdx++;
        } else {
            px++;
            py = 0;
        }
        
        if(wordIdx === sentence.length) {
            count++;
            wordIdx = 0;    
        }
    }
    // console.log(mat);
    // let str = '';
    // for(let i = 0; i < mat.length; i++) {
    //     const word = mat[i].join('');
    //     str += word + '\n';
    // }
    // console.log(str);
    return count;
};