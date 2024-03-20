var tableNumber=+prompt("Enter table number");

var tableLength=+prompt("Enter the length of table");

    var multiplication1=tableNumber*num1;
    

var num1=['1','2','3','4','5','6','7','8','9','10'];


if(tableNumber && tableLength){
    document.write('multiplication table of '+tableNumber);
    document.write('Length'+tableLength);
 for(i=1;i<tableLength;i++){
            document.write(tableNumber*+'x'+num1+'='+multiplication1);
    }
}