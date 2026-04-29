// Last updated: 4/29/2026, 10:21:30 AM
/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a, b) => a-b);
    let mass2 = mass;
    for(let i = 0; i < asteroids.length; i++) {
        const asteroid = asteroids[i];
        if(mass2 >= asteroid) {
            mass2 += asteroid;
        } else {
            return false;
        }
    }
    return true;
};