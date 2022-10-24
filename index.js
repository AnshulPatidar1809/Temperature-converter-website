/* --Styled after Roboctopus' Victory Lapse album-- */

function tempConvert(userInput) {
    var initialout = "";
    var finalout = "";
    var result = "";

    tempInput = userInput;
    x = isNaN(tempInput);

    if (x !== true && tempInput !== "") {
        if (document.getElementById("fahrenheitInitial").checked === true) {

            initialOut = "Fahrenheit";
            if (document.getElementById("fahrenheitFinal").checked === true) {
                finalOut = "Fahrenheit";
                result = parseFloat(tempInput);
            } else if (document.getElementById("celsiusFinal").checked === true) {
                finalOut = "Celsius";
                result = ((tempInput - 32) * 5) / 9;
            } else if (document.getElementById("kelvinFinal").checked === true) {
                finalOut = "Kelvin";
                result = (((tempInput - 32) * 5) / 9) + 273;
            } else { document.getElementById("outputDiv").innerHTML = ("You must pick a desired unit<br><br>").toString(); }
        } else if (document.getElementById("celsiusInitial").checked === true) {
            initialOut = "Celsius";
            if (document.getElementById("fahrenheitFinal").checked === true) {
                finalOut = "Fahrenheit";
                result = ((tempInput * 9) / 5) + 32;
            } else if (document.getElementById("celsiusFinal").checked === true) {
                finalOut = "Celsius";
                result = parseFloat(tempInput);
            } else if (document.getElementById("kelvinFinal").checked === true) {
                finalOut = "Kelvin";
                result = (tempInput * 1) + 273;
            } else { document.getElementById("outputDiv").innerHTML = ("You must pick a desired unit<br><br>").toString(); }
        } else if (document.getElementById("kelvinInitial").checked === true) {
            initialOut = "Kelvin";
            if (document.getElementById("fahrenheitFinal").checked === true) {
                finalOut = "Fahrenheit";
                result = (((tempInput - 273) * 9) / 5) + 32;
            } else if (document.getElementById("celsiusFinal").checked === true) {
                finalOut = "Celsius";
                result = tempInput - 273;
            } else if (document.getElementById("kelvinFinal").checked === true) {
                finalOut = "Kelvin";
                result = parseFloat(tempInput);
            } else { document.getElementById("outputDiv").innerHTML = ("You must pick a desired unit<br><br>").toString(); }
        } else { document.getElementById("outputDiv").innerHTML = ("You must pick the current unit").toString(); }
    } else { document.getElementById("outputDiv").innerHTML = ("You must enter a number<br><br>").toString(); }

    if (typeof result !== "string") {

        roundedResult = Math.round(result / 0.01) * 0.01
        document.getElementById("outputDiv").innerHTML = (tempInput + " " + initialOut + " is equal to " + roundedResult + " " + finalOut + ".").toString();
    }
}