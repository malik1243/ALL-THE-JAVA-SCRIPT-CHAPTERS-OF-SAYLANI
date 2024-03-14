
function isVowel(character) {
    
    character = character.toLowerCase();
    
    
    return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u';
}

let input = prompt("Enter a character:");
let character = input.charAt(0);

if (character.length === 1) {
    document.write(`Is '${character}' a vowel? ${isVowel(character)}`);
} else {
    document.write("Invalid input. Please enter a single character.");
}
