// user can select there favirote background color here
// actually user can only select black color cause Colorful is on default
var userSelect = +prompt("Select your Favorite Color\nEnter 1 for Black\nEnter 2 for Colorful");
var bgcol = document.getElementById("outerGradi");
if (userSelect == 1) {
    bgcol.style.display = "none";
}





// getting id from HTML file
var display = document.getElementById("display");

// to get input/value from user
// and stack them after another

function Click(val) {

    if (display.value == "Error" || display.value == "0") {
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
    if (display.value == "Error") {
        display.value = "";
    } else {
        display.value = display.value.slice(0, display.value.length - 1);
    }
}





// run equal btn to calculate
// also checking/correcting every possible Error from user

function equalBtn() {

    var text = display.value;
    var errorConfirm = false;


    // to check if user gives symbol in start or last

    var toCheckOnStart = "/*";
    var toCheckOnLast = "-+/*";

    for (var i = 0; i < toCheckOnLast.length; i++) {

        if (toCheckOnStart.includes(text[i]) && toCheckOnLast.includes(text[text.length - 1])) {
            errorConfirm = true;
            break;
        }
    }





    // to check if user gives more then 1 same or different symbol one after another

    var allSymbol = ".+-/*";
    // var allSymbolExcludeMinus = ".+/*";   // Not just now. It will use to allow user to give second value in nagtive
    for (var i = 0; i < text.length; i++) {

        if (allSymbol.includes(text[i]) && allSymbol.includes(text[i - 1])) {
            errorConfirm = true;
        }
    }





    // It Calculates value and gives Error on Calculator display

    if (text.trim() === "") {
        return;
    } else if (!errorConfirm) {
        display.value = eval(display.value);
    } else {
        display.value = "Error";
    }
}