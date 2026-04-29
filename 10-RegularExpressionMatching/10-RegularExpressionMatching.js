// Last updated: 4/29/2026, 10:36:48 AM
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
    const lenS = s.length;
    const lenP = p.length;
    
    const hash = {};
    console.log(`s: ${s}`);
    console.log(`p: ${p}`);
    
    function check(idxS, idxP) {
        console.log(`idxS: ${idxS}, idxP: ${idxP}`);
        if(hash[`${idxS}:${idxP}`] !== undefined) {
            return hash[`${idxS}:${idxP}`];
        }    
        if(idxS > lenS) {
            return false;
        }
        if(idxS === lenS && idxP === lenP) {
            return true;
        }
        
        if(p[idxP] === '.' || p[idxP] === s[idxS]) {
            hash[`${idxS}:${idxP}`] = p[idxP + 1] === '*'? check(idxS + 1, idxP) || check(idxS, idxP + 2): check(idxS + 1, idxP + 1);
        } else {
            hash[`${idxS}:${idxP}`] = p[idxP + 1] === '*'? check(idxS, idxP + 2) : false;
        }
        console.log(`hash[${idxS}:${idxP}] = ${hash[idxS + ':' + idxP]}`);
        return hash[`${idxS}:${idxP}`];
    }
    
    return check(0, 0);
}


/*
var isMatch = function(s, p) {
    var lenS = s.length;
  var lenP = p.length;
  var map = {};

  return check(0, 0);

  function check(idxS, idxP) {
    if (map[idxS + ':' + idxP] !== undefined) return map[idxS + ':' + idxP];
    if (idxS > lenS) return false;
    if (idxS === lenS && idxP === lenP) return true;

    if (p[idxP] === '.' || p[idxP] === s[idxS]) {
      map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
        check(idxS + 1, idxP) || check(idxS, idxP + 2) :
        check(idxS + 1, idxP + 1);
    } else {
      map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
        check(idxS, idxP + 2) : false;
    }
    return map[idxS + ':' + idxP];
  }
};
*/