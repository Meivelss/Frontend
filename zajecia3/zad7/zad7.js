let checked = [];

function isHappyNumber(number) {
    let sum = 0;
    const str = number.toString();

    for (let i = 0; i < str.length; i++) {
        sum += (parseInt(str[i], 10) * parseInt(str[i], 10));
    }
    
    if (sum == 1) {
        return true;
    }
    else if (checked.includes(sum)) {
        return false;
    }
    checked.push(sum);

    return isHappyNumber(sum);
}

console.log(isHappyNumber(12));