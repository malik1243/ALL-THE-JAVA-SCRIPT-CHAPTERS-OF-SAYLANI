let num = parseFloat(prompt("Enter a number:"));
function absoluteValue(num) {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}





let absNum = absoluteValue(num);


document.write(`The absolute value of ${num} is ${absNum}`);
