// Last updated: 4/29/2026, 10:19:22 AM
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return 'Hello World';
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */