var first_number=+prompt("Enter the first number");

var second_number=+prompt("Enter the second number");

var operations=prompt("enter the follownig oprations(+,-,*,/,%)");

if(operations.toLowerCase()==='+'){
    document.write(first_number+second_number);
}
if(operations.toLowerCase()==='-'){
    document.write(first_number-second_number);
}
if(operations.toLowerCase()==='*'){
    document.write(first_number*second_number);
}
if(operations.toLowerCase()==='/'){
    document.write(first_number/second_number);
}
if(operations.toLowerCase()==='%'){
    document.write(first_number%second_number);
}


