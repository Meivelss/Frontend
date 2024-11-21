function sum(numbers) {
    let acc = 0;
    numbers.forEach(num => acc += num);
    return acc;
}

let numbers = [1, 3, 5, 7];
console.log(sum(numbers));