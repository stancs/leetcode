// Last updated: 4/29/2026, 10:31:53 AM
/**
 * @param {number} num
 * @return {string}
 */

// Read Number

// 
// test cases
// 123: "One Hundred Twenty Three"
// 12345: "Twelve Thousand Three Hundred Forty Five"
// 1234567: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// 1234567891: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
// 15
// 0


var numberToWords = function(num) {
    if(num === 0) {
        return 'Zero';
    }
    const revStr = reverse(num.toString());
    const len = revStr.length;
    // 1/3/3/3
    // 1234567890 => "0987654321"
    const oStr = revStr.slice(0, 3);
    const tStr = revStr.slice(3, 6);
    const mStr = revStr.slice(6, 9);
    const bStr = revStr.slice(9);
    
    let output = '';
    if(bStr) {
        const read = readThreeDigits(bStr);
        if(read.length) {
            output = `${read} Billion`;
        }
    }
    if(mStr) {
        const read = readThreeDigits(mStr);
        if(read.length) {
            output = output + ` ${read} Million`;
        }
    }
    if(tStr) {
        const read = readThreeDigits(tStr);
        if(read.length) {
            output = output + ` ${read} Thousand`;
        }
    }
    if(oStr) {
        const read = readThreeDigits(oStr);
        if(read.length) {
            output = output + ` ${read}`;
        }
    }
    output = output.trim();
    return output;
};

function reverse(str) {
    if(str) {
        return str.split('').reverse().join('');    
    } 
}

const hash = {
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '10': 'Ten',
    '11': 'Eleven',
    '12': 'Twelve',
    '13': 'Thirteen',
    '14': 'Fourteen',
    '15': 'Fifteen',
    '16': 'Sixteen',
    '17': 'Seventeen',
    '18': 'Eighteen',
    '19': 'Nineteen',
    '20': 'Twenty',
    '30': 'Thirty',
    '40': 'Forty',
    '50': 'Fifty',
    '60': 'Sixty',
    '70': 'Seventy',
    '80': 'Eighty',
    '90': 'Ninety',
    '100': 'Hundred',
};

function readThreeDigits(str) {
    let read = '';
    const hundred = str[2];
    const ten = str[1];
    const one = str[0];
    if(hundred && hundred !== '0') {
        read = `${hash[hundred]} Hundred`;
    }
    if(ten && ten !== '0') {
        if(ten === '1') {
            read += ` ${hash[ten + one]}`;
            read = read.trim();
            return read;
        } else {
            read += ` ${hash[`${ten}0`]}`;
        }
    }
    if(one && one !== '0') {
        read += ` ${hash[one]}`;
    }
    read = read.trim();
    return read;
}