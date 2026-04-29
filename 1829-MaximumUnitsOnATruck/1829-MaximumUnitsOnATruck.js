// Last updated: 4/29/2026, 10:22:39 AM
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => {
        const [box1, unit1] = a;
        const [box2, unit2] = b;
        return unit2 - unit1;
    });
    console.log(boxTypes);
    let totalUnits = 0;
    let totalBoxes = 0;
    for(let i = 0; i < boxTypes.length; i++) {
        const [nBox, nUnit] = boxTypes[i];
        if(totalBoxes + nBox < truckSize) {
            totalUnits += nBox * nUnit;
            totalBoxes += nBox;
        } else {
            const chosenBox = truckSize - totalBoxes;
            totalUnits += chosenBox * nUnit;
            totalBoxes += chosenBox;
        }
    }
    return totalUnits;
};