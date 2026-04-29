// Last updated: 4/29/2026, 10:28:45 AM
/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    const [h, m] = time.split(':');
    const hh = h.padStart(2, '0');
    const mm = m.padStart(2, '0');
    console.log(`hh: ${hh}, mm: ${mm}`);
    
    const set = new Set([parseInt(h[0]), parseInt(h[1]), parseInt(m[0]), parseInt(m[1])]);
    console.log(set);
    
    if(set.size === 1) {
        return time;
    }
    
    const arr = [...set];
    
    const originalMinutes = parseInt(h) * 60 + parseInt(m);
    console.log(`originalMinutes: ${originalMinutes}`);
    
    let res = '';
    let min = Number.MAX_SAFE_INTEGER;
    const dfs = (curr, pos) => {
        // curr: hhmm
        // pos: index
        if(pos === 4) {
            const totalMinutes = parseInt(curr.substring(0, 2)) * 60 + parseInt(curr.substring(2));
            const diff = totalMinutes - originalMinutes;
            const abs = diff > 0? diff: 60 * 24 + diff;
            if(abs < min) {
                min = abs;
                res = curr.substring(0, 2) + ':' + curr.substring(2);
            }
        } else {
            for(let i = 0; i < arr.length; i++) {
                const num = arr[i];
                if(pos === 0) {
                    if(num < 3) {
                        dfs(num.toString(), 1);
                    }
                } else if(pos === 1) {
                    const strHh = curr + num.toString();
                    if(parseInt(strHh) < 24) {
                        dfs(strHh, 2);
                    }
                    
                } else if(pos === 2) {
                    if(num < 6) {
                        dfs(curr + num.toString(), 3);
                    }
                } else if(pos === 3) {
                    const strMm = curr.substring(2) + num.toString();
                    if(parseInt(strMm) < 60) {
                        dfs(curr.substring(0, 2) + strMm, 4);
                    }
                }
            }
        }
    }
    
    dfs('', 0);
    
    return res;
};