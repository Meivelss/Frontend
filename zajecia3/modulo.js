function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}

const isEven = (number) => {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

let number = 11;
console.log(isEven(number))
console.log(isOdd(number))