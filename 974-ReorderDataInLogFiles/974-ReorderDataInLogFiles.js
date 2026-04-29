// Last updated: 4/29/2026, 10:26:42 AM
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    // separate btw letter logs and digit logs in separate arrays
    // sort letter logs lexicographically
    // merge sorted letter logs and put digits logs at the end of letter logs
    const letterLogs = [];
    const digitLogs = [];
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const areAllLetters = s => {
        for(const ch of s) {
            if(ch === ' ') {
                continue;
            }
            if(!letters.includes(ch)) {
                return false;
            }
        }
        return true;
    }
    const areAllDigits = s => {
        for(const ch of s) {
            if(ch === ' ') {
                continue;
            }        
            if(!digits.includes(ch)) {
                return false;
            }
        }
        return true;
    }
    
    for(const log of logs) {
        const arr = log.split(' ');
        const id = arr[0];
        const recordArr = arr.slice(1);
        const recordStr = recordArr.join(' ');
        console.log(`${id}: ${recordStr}`);
        if(areAllLetters(recordStr)) {
            letterLogs.push([id, recordStr, log]);
        } else if(areAllDigits(recordStr)) {
            digitLogs.push([id, recordStr, log]);
        } else {
            console.log('Something wrong');
        }
    }
    console.log(letterLogs);
    console.log(digitLogs);
    letterLogs.sort((a, b) => {
        const valueCompare = a[1].localeCompare(b[1]);
        if(valueCompare !== 0) {
            return valueCompare;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    console.log(letterLogs);

    const arr1 = letterLogs.map(arr => arr[2])
    const arr2 = digitLogs.map(arr => arr[2]);
    const arr3 = arr1.concat(arr2);
    console.log(arr3);
    return arr3;
};