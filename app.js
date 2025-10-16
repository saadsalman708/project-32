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
    display.value = display.value.slice(0, display.value.length - 1);
}





// to run equal btn to calculate
// also checking/correcting every possible Error from user

function equalBtn() {

    var errorConfirm = false;

    
    // to check if user gives symbol in start or last
    
    var toCheckOnStart = "/*";
    var toCheckOnLast = "-+/*";

    for (var i = 0; i < toCheckOnLast.length; i++) {

        if (display.value[0] == toCheckOnStart[i] || display.value[display.value.length - 1] == toCheckOnLast[i]) {
            errorConfirm = true;
            break;
        }
    }




    // to check if user gives more then 1 same or different symbol one after another

    var allSymbol = ".+-/*";
    // var allSymbolExcludeMinus = ".+/*";   // just not now
    for (var i = 0; i < display.value.length; i++) {

        var firstSymbol = false;
        var secondSymbol = false;
        for (var j = 0; j < allSymbol.length; j++) {

            if (display.value[i] == allSymbol[j]) {
                firstSymbol = true;
            }
            if (display.value[i + 1] == allSymbol[j]) {
                secondSymbol = true;
            }
        }
        
        if (firstSymbol && secondSymbol) {
            errorConfirm = true;
            break;
        }
    }





    // it to show Error on Calculator display

    if (display.value.trim() === "") {
        return;
    } else if (!errorConfirm) {
        display.value = eval(display.value);
    } else {
        display.value = "Error";
    }
}