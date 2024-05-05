let RamadanDate= new Date(2015, 5 , 18);

let CurrentDate= new Date();

let daysdiff=CurrentDate.getTime() - RamadanDate.getTime();

let DaysPassed=Math.floor(daysdiff / (1000*3600*24));

document.write('Number of Days passed since 1st Ramadan:',DaysPassed );