// Last updated: 4/29/2026, 10:31:38 AM
var getAbbr = function(word) {
    const len = word.length;
    const first = word[0];
    const last = word[len-1];
    const num = len - 2;
    if(num > 0) {
        return first + num + last;
    } else {
        return word;
    }
}

/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.abbrMap = new Map();
    for(const word of dictionary) {
        const abbr = getAbbr(word);
        console.log(`${word} => ${abbr}`);
        if(!this.abbrMap.has(abbr)) {
            this.abbrMap.set(abbr, new Set());
        }
        this.abbrMap.get(abbr).add(word);
    }
    console.log(this.abbrMap);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    // check if abb of dic matches with word
    // if abb of dic matches with word, check that word with the input word
    const abbr = getAbbr(word);
    console.log(`unique check for ${word} - abbr:`, abbr)
    const abbrSet = this.abbrMap.get(abbr);
    console.log('abbrSet: ', abbrSet);
    if(!abbrSet) {
        return true;
    } 
    if(abbrSet && abbrSet.size === 1 && abbrSet.has(word)) {
        return true;
    }
    return false;
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */