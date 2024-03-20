let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("Items of the array along with their index and length:"+'<br>');

for (let i = 0; i < fruits.length; i++) {
    document.write(`Index ${i}: ${fruits[i]}, Length: ${fruits[i].length}`+'<br>');
}
