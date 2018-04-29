"use strict";

function btnClick(btn) {
    if (document.calculator.operator.value && document.calculator.left.value !== "") {
        document.calculator.right.value += btn.getAttribute("value");
    } else {
        document.calculator.left.value += btn.getAttribute("value");
    }

}


function operClick(btn) {
    document.calculator.operator.value = btn.getAttribute("value");
}


function runClear() {
    document.calculator.left.value = "";
    document.calculator.operator.value = "";
    document.calculator.right.value = "";
}

function total() {
    var evaluate = document.calculator.left.value + " " + document.calculator.operator.value + " " + document.calculator.right.value;
    var total = eval(evaluate);
    document.calculator.left.value = total;
    document.calculator.operator.value = "";
    document.calculator.right.value = "";
// }

// function decimal() {
//     if (document.calculator.decimal.getAnonymousElementByAttribute("value") < 1) {
//         document.calculator.decimal.getAnonymousElementByAttribute("value") === true
//
//
//     }


}



