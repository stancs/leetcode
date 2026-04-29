// Last updated: 4/29/2026, 10:27:19 AM
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(s, indices, sources, targets) {
    const arr = s.split('');
    console.log(arr);
    for(let i = 0; i < indices.length; i++) {
        const idx = indices[i];
        const src = sources[i];
        const tgt = targets[i];
        console.log(`idx: ${idx}, src: ${src}, tgt: ${tgt}`)
        
        const substring = s.substring(idx, idx + src.length);
        console.log(substring);
        if(substring === src) {
            arr[idx] = tgt;
            for(let j = 1; j < src.length; j++) {
                arr[idx+j] = '';
            }
        }
        console.log(arr);
    }
    return arr.join('');
};