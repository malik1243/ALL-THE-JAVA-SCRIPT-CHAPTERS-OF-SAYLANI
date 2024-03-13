var total_marks=300;

var marks_obtained=prompt("Enter the obtained numbers");

var grade='A-one';
var grade1='A';
var grade2='B';
var grade3='Fail';
var percentage = (total_marks / marks_obtained) * 100+'%';
if(marks_obtained.toLowerCase()>=290){
    document.write(total_marks+'<br>');
    document.write("Marks Obtained:"+marks_obtained+'<br>');
    document.write('percentage'+percentage+'<br>');
    document.write('Grade:'+grade+'<br>');
    document.write('Remarks:'+"Excellent"+'<br>');
}

if(marks_obtained.toLowerCase()>=240) {
    document.write(total_marks+'<br>');
    document.write("Marks Obtained:"+marks_obtained+'<br>');
    document.write('percentage'+percentage+'<br>');
    document.write('Grade:'+grade1+'<br>');
    document.write('Remarks:'+"Good"+'<br>');   
}

if(marks_obtained.toLowerCase()>=150) {
    document.write(total_marks+'<br>');
    document.write("Marks Obtained:"+marks_obtained+'<br>');
    document.write('percentage'+percentage+'<br>');
    document.write('Grade:'+grade2+'<br>');
    document.write('Remarks:'+"You need to improve"+'<br>');
}

if(marks_obtained.toLowerCase()>=50) {
    document.write(total_marks+'<br>');
    document.write("Marks Obtained:"+marks_obtained+'<br>');
    document.write('percentage'+percentage+'<br>');
    document.write('Grade:'+grade3+'<br>');
    document.write('Remarks:'+"Sorry"+'<br>');
}