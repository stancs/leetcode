// Last updated: 4/29/2026, 10:31:31 AM
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const hash = {};
    const secretArr = secret.split('');
    for(let i = 0; i < secretArr.length; i++) {
        const num = secretArr[i];
        if(hash[num]) {
            hash[num].push(i);
        } else {
            hash[num] = [ i ];
        }
    }
    const guessArr = guess.split('');
    let numBulls = 0;
    let numCows = 0;
    const bullIdxArr = [];
    for(let i = 0; i < guessArr.length; i++) {
        const num = guessArr[i];
        if(hash[num]) {
            if(hash[num].includes(i)) {
                numBulls++;
                hash[num] = hash[num].filter(idx => idx !== i);
                bullIdxArr.push(i);
            }
        }
    }
    for(let i = 0; i < guessArr.length; i++) {
        if(bullIdxArr.includes(i)) {
            continue;
        }
        const num = guessArr[i];
        if(hash[num] && hash[num].length >= 1) {
            numCows++;
            hash[num].pop();
        }
    }
    return `${numBulls}A${numCows}B`;
};
