
let colorsArray = ["red", "blue", "green"];

let userIndex = prompt("Enter the index where you want to add the color:");
let userColor = prompt("Enter the color:");

let index = parseInt(userIndex);

colorsArray.splice(index, 0, userColor);

document.write("Updated Colors Array: " + colorsArray);
