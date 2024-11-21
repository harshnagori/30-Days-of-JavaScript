 /**
 * @param {number} n
 * @return {Function} counter
 */
 var createCounter = function(n) {
    let count = n
    return function() {
        const currCount = count;
        count += 1;
        return currCount;
    };
};



/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */