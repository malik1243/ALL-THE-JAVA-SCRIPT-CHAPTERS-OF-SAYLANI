let Day7=["Sun","Mon","Tue","Wed","Thur","Fri","Sat",

];

let currentDate=new Date();

let currentDay=currentDate.getDay();

let Dayname=Day7[currentDay];

document.writeln('Today day is: ',Dayname,'<br>')

if(Dayname==='Sun'){
    document.writeln("Today is fun day");
}