let currentDate = new Date();

let currentHours = currentDate.getHours();

currentDate.setHours(currentHours + 1);

document.write("Date object one hour ahead: " + currentDate);
