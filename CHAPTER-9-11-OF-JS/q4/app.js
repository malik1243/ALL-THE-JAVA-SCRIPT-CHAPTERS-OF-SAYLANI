var fuel_box=prompt('Enter the remaining litre in the car');

if(fuel_box.toLowerCase()==='2 litres') {
    document.write("Car can go for a long drive");
}
if(fuel_box.toLowerCase()==='1 litres') {
    document.write("Car can go for around a small drive");
}
if(fuel_box.toLowerCase()==='0.25 litres') {
    document.write("Car should be fueled quickly");
}
