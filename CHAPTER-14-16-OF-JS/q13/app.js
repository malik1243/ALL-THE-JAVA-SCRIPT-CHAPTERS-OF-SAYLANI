
let fifoArray = [];


fifoArray.push("Value1");
fifoArray.push("Value2");
fifoArray.push("Value3");


let firstValue = fifoArray.shift();
let secondValue = fifoArray.shift();
let thirdValue = fifoArray.shift();


document.write("First Value:", firstValue);
document.write("Second Value:", secondValue);
document.write("Third Value:", thirdValue);
