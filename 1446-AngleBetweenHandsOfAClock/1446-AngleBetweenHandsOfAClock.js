// Last updated: 4/29/2026, 10:24:15 AM
/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const angleHr = 30*hour + 0.5*minutes;
    const angleMin = 6*minutes;
    
    const diff = Math.abs(angleHr - angleMin);
    const smallerAngle = diff <= 180? diff: 360 - diff;
    return smallerAngle;
};