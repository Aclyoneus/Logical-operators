// 1

function isAlarmSet(isEmployed, isOnVacation) {
    return isEmployed && !isOnVacation;
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
    if (objectA > objectB) {
        return 1;
    }
    return -1;
}

// 4

function isTruthyOrFalsy(trueOrFalse, functionIfTruthy, functionIfFalsy) {
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

// 6

function convertAmericanToEuropeanFloor(americanFloor) {
    if (americanFloor > 12) {
        return americanFloor - 2;
    }
    if (americanFloor > 0) {
        return americanFloor - 1;
    }
    return americanFloor;
}

// 7

function rockPaperScissorsLizardSpock(playerOne, playerTwo) {
    function playWithScissors(opponent) {
        if (opponent === 'lizard' || opponent === 'paper') {
            return 'Player 1 Won!';
        }
        return 'Player 2 Won!';
    }

    function playWithPaper(opponent) {
        if (opponent === 'rock' || opponent === 'spock') {
            return 'Player 1 Won!';
        }
        return 'Player 2 Won!';
    }

    function playWithRock(opponent) {
        if (opponent === 'lizard' || opponent === 'scissors') {
            return 'Player 1 Won!';
        }
        return 'Player 2 Won!';
    }

    function playWithLizard(opponent) {
        if (opponent === 'spock' || opponent === 'paper') {
            return 'Player 1 Won!';
        }
        return 'Player 2 Won!';
    }

    function playWithSpock(opponent) {
        if (opponent === 'rock' || opponent === 'scissors') {
            return 'Player 1 Won!';
        }
        return 'Player 2 Won!';
    }

    if (playerOne === playerTwo) {
        return 'Draw!';
    }
    if (playerOne === 'scissors') {
        return playWithScissors(playerTwo);
    }
    if (playerOne === 'paper') {
        return playWithPaper(playerTwo);
    }
    if (playerOne === 'rock') {
        return playWithRock(playerTwo);
    }
    if (playerOne === 'lizard') {
        return playWithLizard(playerTwo);
    }
    return playWithSpock(playerTwo);
}

// 8

function isPasswordLengthCorrect(value) {
    return value.length >= 8;
}

function isPasswordContainingCapitalLetter(value) {
    return /[A-Z]/.test(value);
}

function isPasswordContainingNumber(value) {
    return /[0-9]/.test(value);
}

function isValidPassword(password) {
    return isPasswordLengthCorrect(password)
        && isPasswordContainingCapitalLetter(password)
        && isPasswordContainingNumber(password);
}

// 9

function isPasswordContainingLowercase(value) {
    return /[a-z]/.test(value);
}

function isPasswordContainingSpecialCharacter(value) {
    return /[^a-zA-Z0-9]/.test(value);
}

function convertBooleanToNumber(boolean) {
    return +boolean;
}

function getPasswordStrength(password) {
    return convertBooleanToNumber(isPasswordLengthCorrect(password))
        + convertBooleanToNumber(isPasswordContainingCapitalLetter(password))
        + convertBooleanToNumber(isPasswordContainingLowercase(password))
        + convertBooleanToNumber(isPasswordContainingSpecialCharacter(password));
}

// 10

function discountedPrice(itemValue) {
    return itemValue - (itemValue * 0.05);
}

function convertLoyalityPointsToMoney(loyalityPoints) {
    return loyalityPoints / 100;
}

function isPackageShipped(isShipped) {
    if (isShipped) {
        return 10;
    }
    return 0;
}

function getTotalOrderCost (itemValue, loyalityPoints, isShipped) {
    if ((discountedPrice(itemValue) - convertLoyalityPointsToMoney(loyalityPoints)) >= 0) {
    return discountedPrice(itemValue)
        - convertLoyalityPointsToMoney(loyalityPoints)
        - isPackageShipped(isShipped);
    }
    return discountedPrice(itemValue) - isPackageShipped(isShipped);
}