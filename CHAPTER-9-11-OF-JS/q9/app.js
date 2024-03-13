function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let input = prompt("Enter a number:");
let num = parseInt(input);

if (!isNaN(num)) {
    let result = checkEvenOdd(num);
    document.write(`The number ${num} is ${result}.`);
} else {
    document.write("Invalid input. Please enter a valid integer.");
}
