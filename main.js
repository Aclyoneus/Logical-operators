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

function _if(bool, func1, func2) {
    if (bool) {
        return func1();
    }
    return func2();
}