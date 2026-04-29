// Last updated: 4/29/2026, 10:29:01 AM
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let r = []
    let d = [];
    for(let i = 0; i < senate.length; i++) {
        if(senate[i] === 'R') {
            r.push(i);
        } else {
            d.push(i);
        }
    }
    while(r.length > 0 && d.length > 0) {
        // console.log(`r:`, r);
        // console.log('d:', d);

        let rIdx = r.shift();
        let dIdx = d.shift();
        if(rIdx < dIdx) {
            r.push(rIdx + senate.length);
        } else {
            d.push(dIdx + senate.length);
        }
        
    }

    return r.length > 0? 'Radiant': 'Dire';
};