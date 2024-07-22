// 1

function isAlarmSet(isEmployed, isOnVacation) {
    return isEmployed && !isOnVacation
}

// 2

// 3

const isOneOrBothTruthy = (a, b) => {
    return ((a && !b) || (!a && b)) || a && b;
}

const isOneTruthy = (a, b) => {
    return (a && !b) || (!a && b);
}

// 4