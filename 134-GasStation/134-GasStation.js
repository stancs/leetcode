// Last updated: 4/29/2026, 10:34:09 AM
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    const startTravel = (startIdx, len) => {
        let gasAmt = 0;
        let costAmt = 0;
        for(let i = startIdx; i <= startIdx + len; i++) {
            const realIdx = i % len;
            const init = gasAmt;
            gasAmt -= costAmt;
            if(gasAmt < 0) {
                return false;
            }
            gasAmt += gas[realIdx];
            // console.log(`[${i}] ${init} +${gas[realIdx]} - ${costAmt} = ${gasAmt}`)
            costAmt = cost[realIdx];
        }
        return true;
    }
    for(let i = 0; i < n; i++) {
        // console.log(`i: ${i}`)
        if(startTravel(i, n)) {
            // console.log('traveled')
            return i;
        }
    }
    return -1;
};

var canCompleteCircuit = function(gas, cost) {
     const n = gas.length;
    let totalGas = 0;
    let totalCost = 0;
    let currentGas = 0;
    let startingStation = 0;

    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];

        // If current gas is negative, reset starting station
        if (currentGas < 0) {
            startingStation = i + 1; // Move to the next station
            currentGas = 0; // Reset current gas
        }
    }

    // If total gas is less than total cost, it's impossible to complete the circuit
    return totalGas < totalCost ? -1 : startingStation;
}