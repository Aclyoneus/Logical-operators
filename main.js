// 1

function isAlarmSet(isEmployed, isOnVacation) {
    return isEmployed && !isOnVacation
}

// 2

function isOneOrBothTruthy(valueOne, valueTwo) {
    if (valueOne) {
        return true;
    }
    if (valueTwo) {
        return true;
    }
    return false;
}

function isOneTruthy(valueOne, valueTwo) {
    if (valueOne && valueTwo) {
        return false;
    }
    if (valueOne) {
        return true;
    }
    if (valueTwo) {
        return true;
    }
    return false;
}

// 3

function compareDistanceToMargin(objectA, objectB, margin = 0) {
    if (Math.abs(objectA - objectB) <= margin) {
        return 0;
    }
    if (objectA > objectB)) {
        return 1;
    }
    return -1;
}

// 4

function isTruthyorFalsy(trueOrFalse, functionIfTruthy, functionIfFalsy) {
    if (trueOrFalse) {
        return functionIfTruthy();
    }
    return functionIfFalsy();
}

// 5

function rentalCarCost(rentalDays) {
    const costWithoutDiscount = rentalDays * 40;

    if (rentalDays >= 7) {
        return costWithoutDiscount - 50;
    }
    if (rentalDays >= 3) {
        return costWithoutDiscount - 20;
    }
    return costWithoutDiscount;
}
