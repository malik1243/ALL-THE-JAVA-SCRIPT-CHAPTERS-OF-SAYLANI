var month12=["January","Febraury","March","April","May","June","July"
    ,"August","September","October","November","December"
];

let currentDate=new Date();

let currentMonth=currentDate.getMonth();

let MonthNames=month12[currentMonth];

document.write('The current month is: ',MonthNames);