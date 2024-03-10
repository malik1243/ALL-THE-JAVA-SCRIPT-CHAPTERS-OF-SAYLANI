
let colorsArray = ["red", "blue", "green", "yellow", "orange"];


let userIndex = prompt("Enter the index where you want to start deleting colors:");
let userCount = prompt("Enter the number of colors you want to delete:");


let index = parseInt(userIndex);
let count = parseInt(userCount);


colorsArray.splice(index, count);


document.write("Updated Colors Array: " + colorsArray);
