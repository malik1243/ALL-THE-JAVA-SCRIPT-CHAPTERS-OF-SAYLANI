

let currentDate=new Date();

document.write('Current Date: ',currentDate,'<br>');

let ElapsedTime=currentDate.getTime();

document.write('Elapsed Milliseconds since January 1,1970: ',ElapsedTime,'<br>');

let ElapsedMin=currentDate.getTime() / 1000 / 60;

document.write('Elapsed Minutes since January 1,1970: ',ElapsedMin,'<br>')