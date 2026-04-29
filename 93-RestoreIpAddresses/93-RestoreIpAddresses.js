// Last updated: 4/29/2026, 10:34:53 AM
/**
 * @param {string} s
 * @return {string[]}
 */
// 44:40s
// O(1) time | O(n) space
var restoreIpAddresses = function(s) {
    const output = [];
    restoreIpAddressesHelper('', s, 4, output);
    return output;
};

function restoreIpAddressesHelper(separated, remained, numRemainingIps, output) {
    if(numRemainingIps === 0) {
        if(remained.length === 0) {
            output.push(separated);    
        }
        return;
    }
    if(remained.length >= numRemainingIps * 1 && remained.length <= numRemainingIps * 3) {
        for(let i = 1; i <= Math.min(3, remained.length); i++) {
            const ipStr = remained.slice(0, i);
            if(ipStr.length > 1 && ipStr.startsWith('0')) {
                continue;
            }
            const newRemained = remained.slice(i);
            const ipNum = Number(ipStr);
            if(ipNum >= 0 && ipNum <= 255) {
                if(separated.length === 0) {
                    restoreIpAddressesHelper(ipStr, newRemained, numRemainingIps - 1, output)
                } else {
                    restoreIpAddressesHelper(`${separated}.${ipStr}`, newRemained, numRemainingIps - 1, output);    
                }
            }   
        }
    }
}