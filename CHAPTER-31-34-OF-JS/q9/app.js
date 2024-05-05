let StartDate=new Date(2015,0,1);

let RefrenceDate=new Date(2015,11,5);

let Time= RefrenceDate.getTime() - StartDate.getTime();

let Original=Math.floor(Time/(1000));

document.write(Original , ' seconds passed since beginning of 2015');

