let now = new Date();

let currentHour = now.getHours();

if (currentHour < 12) {
    document.write("It's AM");
} else {
    document.write("It's PM");
}
