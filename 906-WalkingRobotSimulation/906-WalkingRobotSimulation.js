// Last updated: 4/29/2026, 10:27:05 AM
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const obMap = {};
    for(const [x, y] of obstacles) {
        const key = `${x}#${y}`;
        obMap[key] = true; 
    }
    console.log(obMap);
    const next = (x, y) => {
        return [[x, y+1], [x+1, y], [x, y-1], [x-1, y]];
    }
    let direction = 0;
    let x = 0, y = 0;
    let max = 0;
    for(const cmd of commands) {
        console.log(`cmd: ${cmd}`)
        if(cmd < 0) {
            if(cmd === -1) {
                direction = (direction + 1) % 4;
            } else if(cmd === -2) {
                direction = (direction + 3) % 4;
            }
            console.log(`direction: ${direction}`)
        } else {
            for(let i = 0; i < cmd; i++) {
                const [x2, y2] = next(x,y)[direction];
                const key = `${x2}#${y2}`;
                if(obMap[key]) {
                    break;
                } else {
                    x = x2;
                    y = y2;
                    const val = x*x + y*y;
                    if(val > max) {
                        max = val;
                    }
                }
            }
            console.log(`next (${x},${y})`)
        }
    }
    return max;
};