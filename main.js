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

function compareDistanceToMargin(numberA, numberB, margin = 0) {
    const absoluteDistanceBetweenNumbers = Math.abs(numberA - numberB);

    if (absoluteDistanceBetweenNumbers <= margin) {
        return 0;
    }
    if (numberA > numberB) {
        return 1;
    }
    return -1;
}

// 4

function getFunctionIfTruthyOrFunctionIfFalsy(trueOrFalse, functionIfTruthy, functionIfFalsy) {
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

function rockPaperScissorsLizardSpock(playerOne, playerTwo) {
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

function getPasswordStrength(password) {
    return Number(isPasswordLengthCorrect(password))
        + Number(isPasswordContainingCapitalLetter(password))
        + Number(isPasswordContainingLowercase(password))
        + Number(isPasswordContainingSpecialCharacter(password));
}

// 10

function getDiscountedPrice(itemValue) {
    return itemValue - (itemValue * 0.05);
}

function convertLoyalityPointsToMoney(loyalityPoints) {
    return loyalityPoints / 100;
}

function costIfPackageShipped(isShipped) {
    if (isShipped) {
        return 10;
    }
    return 0;
}

function getTotalOrderCost(itemValue, loyalityPoints, isShipped) {
    const discountedPrice = getDiscountedPrice(itemValue);
    const discountFromLoyalityPoints = convertLoyalityPointsToMoney(loyalityPoints);
    const shippingCost = costIfPackageShipped(isShipped);
    const fullyDiscountedPrice = discountedPrice - discountFromLoyalityPoints;

    if (fullyDiscountedPrice >= 0) {
        return fullyDiscountedPrice - shippingCost;
    }
    return discountedPrice - shippingCost;
}

// 11

function getDiscountWhenMoreThanMonth(ticketPrice) {
    return ticketPrice * 0.1;
}

function getAdditionalFeeIfWeekend(isWeekend) {
    if (isWeekend) {
        return 15;
    }
    return 0;
}

function getTicketPrice(ticketPrice, daysUntilTheShow, isWeekend) {
    if (isWeekend && daysUntilTheShow > 30) {
        return ticketPrice + (getAdditionalFeeIfWeekend(isWeekend) - getDiscountWhenMoreThanMonth(ticketPrice));
    }
    if (isWeekend) {
        return ticketPrice + getAdditionalFeeIfWeekend(isWeekend);
    }
    if (daysUntilTheShow > 30) {
        return ticketPrice - getDiscountWhenMoreThanMonth(daysUntilTheShow);
    }
    return ticketPrice;
}