// getting id from HTML file
var value = document.getElementById("display");

// to get input/value from user
// and stack them after another

function Click(val) {
    if (display.value == "Error") {
        display.value = val;
    } else {
        display.value += val;
    }
}





// to clear display of calculator on UI

function clearDisplay() {
    display.value = "";
}





// to delete last character

function deleteLastChar() {
    display.value = display.value.slice(0, display.value.length - 1);
}





// to run equal btn to calculate
// also checking/correcting every possible Error from user

function equalBtn() {

    var errorConfirm = false;

    var toCheckOnStart = "/*";
    var toCheckOnLast = "-+/*";


    // to check if user gives symbol in start or last

    for (var i = 0; i < toCheckOnLast.length; i++) {

        if (display.value[0] == toCheckOnStart[i] || display.value[display.value.length - 1] == toCheckOnLast[i]) {
            errorConfirm = true;
            break;
        }
    }




    // to check if user gives more then 1 same or different symbol one after another

    var allSymbol = ".+-/*";
    for (var i = 0; i < display.value.length; i++) {

        if (display.value[i] == allSymbol[i]) {
            display.value[i + 1] == allSymbol[i];
            errorConfirm = true;
            break;
        }
    }





    // it to show Error on Calculator display

    if (!errorConfirm) {
        display.value = eval(display.value);
    } else {
        display.value = "Error";
    }
}