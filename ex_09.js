function addHousing(housingList, newHouse, quantity) {
    if (housingList.has(newHouse)) {
        housingList.set(newhouse, housingList.get(newHouse) + quantity);
    } else {
        housingList.set(newhouse , quantity);
    }
}
let housingList = new Map();
addHousing(housingList, "Flat", 2);
addHousing(housingList, "Log", 3);
addHousing(housingList, "Flat", 3);
addHousing(housingList, "Hutch", 2);
displayResult(housingList);

const result = new Map([["Flat", 2]]);
displayResult(result);
