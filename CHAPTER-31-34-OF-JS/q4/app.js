let Date30=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"
,"21","22","23","24","25","26","27","28","29","30"
];

let CurrentDate=new Date();

let CurrentDay=CurrentDate.getDate();

let DateNum=Date30[CurrentDay];

document.write('Current Date is: ',DateNum );

if(Date30 <= '15'){
    document.write('First Fifteen days of month:');
}
else{
    document.write("Last Days of the month:");
}