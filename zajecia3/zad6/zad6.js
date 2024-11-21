function palindrom(word) {
    return word === word.split('').reverse().join('');
}

console.log(palindrom("kajak"));
console.log(palindrom("ugabuga"));
