// Last updated: 4/29/2026, 10:29:58 AM
/**
 * @param {string} IP
 * @return {string}
 */
// 41:47s
// O(n) time | O(1) space
var validIPAddress = function(IP) {
    if(isIPv4Candidate(IP)) {
        const xList = IP.split('.');
        if(xList.length !== 4) {
            return 'Neither';
        }
        for(const x of xList) {
            if(!isValidIPv4X(x)) {
                return 'Neither';
            }
        }
        return 'IPv4';
    } else if(isIPv6Candidate(IP)) {
        const xList = IP.split(':');
        if(xList.length !== 8) {
            return 'Neither';
        }
        for(const x of xList) {
            if(!isValidIPv6X(x)) {
                return 'Neither';
            }
        }
        return 'IPv6';
    } else {
        return 'Neither';
    }
};

function isIPv4Candidate(ip) {
    return ip.includes('.') && !ip.includes(':');
}

function isIPv6Candidate(ip) {
    return ip.includes(':') && !ip.includes('.');
}

function isValidIPv4X(x) {
    if(x === '0') {
        return true;
    }
    if(x.length > 1 && x.startsWith('0')) {
        return false;
    }
    if(x.split('').some(char => char < '0' || char > '9')) {
        return false;
    }
    const num = parseInt(x);
    if(num >= 0 && num <= 255) {
        return true;
    }
}

function isValidIPv6X(x) {
    if(x.length < 1 || x.length > 4) {
        return false;
    }
    if(x.split('').every(char => '0123456789abcdefABCDEF'.includes(char))) {
        return true;
    }
}