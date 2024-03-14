
function checkCharacterType(char) {
    if (char >= '0' && char <= '9') {
        return "Number";
    } else if (char >= 'A' && char <= 'Z') {
        return "Uppercase Letter";
    } else if (char >= 'a' && char <= 'z') {
        return "Lowercase Letter";
    } else {
        return "Special Character or Not a valid input";
    }
}

let input = prompt("Enter a character:");
let character = input.charAt(0);

if (character) {
    let result = checkCharacterType(character);
    document.write(`The character '${character}' is a ${result}.`);
} else {
    document.write("Invalid input. Please enter a valid character.");
}
