let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

let dropdownString = "<select>";


for (let i = 0; i < phoneManufacturers.length; i++) {
    dropdownString += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
}

dropdownString += "</select>";

document.write(dropdownString);
