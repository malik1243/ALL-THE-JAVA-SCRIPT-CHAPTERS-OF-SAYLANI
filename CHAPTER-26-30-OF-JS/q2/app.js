var positive_number=prompt("enter a point number");

//for ceil
var the_ceil_number=prompt("enter the elemnt you want to have on your number");

if(the_ceil_number.toLowerCase()==='ceil'){
    var ceil_num=Math.ceil(positive_number);
    document.write(`the ceil number: `+ceil_num);
}

// for round off

if(the_ceil_number.toLowerCase()==='round'){
    var round_off=Math.ceil(positive_number)
    document.write(`the round off number: `+round_off);
}

// for floor

if(the_ceil_number.toLocaleLowerCase()==='floor'){
    var floor_num=Math.ceil(positive_number);
    document.write(`the floor number: `+floor_num);
}