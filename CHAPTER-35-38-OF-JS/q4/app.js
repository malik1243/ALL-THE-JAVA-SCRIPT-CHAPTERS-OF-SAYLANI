function sum(num1,num2,operator){
    let result;
    switch(operator){
    case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result= num1/num2;
            break;
        }
        document.write('The result of ',num1,operator,num2,' is: ' ,result);
    }

sum(5,7,'+');   