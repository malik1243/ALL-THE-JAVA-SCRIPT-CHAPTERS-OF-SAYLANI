var subject1=prompt("Enter the First Subject");
var subject2=prompt("Enter the Second Subject");
var subject3=prompt("Enter the Third Subject");

var marks1=100;
var marks2=100;
var marks3=100;

var obtained1=+prompt('Enter the obtained marks');
var obtained2=+prompt('Enter the obtained marks');
var obtained3=+prompt('Enter the obtained marks');

var result1=marks1%obtained1;
var result2=marks2%obtained2;
var result3=marks3%obtained3;

document.write(subject1);
document.write(marks1);
document.write(obtained1);
document.write(result1+'%'+'<br>');

document.write(subject2 );
document.write(marks2);
document.write(obtained2);
document.write(result2+'%'+'<br>');

document.write(subject3);
document.write(marks3);
document.write(obtained3);
document.write(result3+'%');