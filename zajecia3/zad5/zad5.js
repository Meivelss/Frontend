function fibonacci(index) {
    let numbers = [0, 1];
    for (let i = 2; i <= index; i++) {
        numbers.push(numbers.at(i - 2) + numbers.at(i - 1));
    }

    return numbers.at(index);
}

console.log(fibonacci(60));