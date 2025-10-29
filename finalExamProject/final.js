/*
    Final Exam Project - JavaScript Calculator
    Author: Luke Smith
    Date: 10/29/2025
*/
function addition() {
    let num = Number(document.getElementById("num").value);
    let additionResult = "";

    for (let i = 1; i <= 10; i++) {
        additionResult += num + " + " + i + " = " + (num + i) + "<br>";
    }
    document.getElementById("addition").innerHTML = additionResult;
}
function subtraction() {
    let num = Number(document.getElementById("num").value);
    let subtractionResult = "";
    let j = 1;
    while (j <= 10) {
        subtractionResult += num + " - " + j + " = " + (num - j) + "<br>";
        j++;
    }
    document.getElementById("subtraction").innerHTML = subtractionResult;
}
function multiplication() {
    let num = Number(document.getElementById("num").value);
    let multiplicationResult = "";
    let k = 1;
    do {
        multiplicationResult += num + " * " + k + " = " + (num * k) + "<br>";
        k++;
    } while (k <= 10);
    document.getElementById("multiplication").innerHTML = multiplicationResult;
}
function division() {
    let num = Number(document.getElementById("num").value);
    let divisionResult = "";
    for (let d = 1; d <= 10; d++) {
        divisionResult += num + " / " + d + " = " + (num / d).toFixed(2) + "<br>";
    }
    document.getElementById("division").innerHTML = divisionResult;
}

function calculateAll() {
    addition();
    subtraction();
    multiplication();
    division();
}
document.getElementById("calculateBtn").addEventListener("click", calculateAll);

