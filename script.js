document.getElementById("calculate").addEventListener("click", function () {
    let option = document.getElementById("dropdown").value;
    let n1 = parseFloat(document.getElementById("number1").value);
    let n2 = parseFloat(document.getElementById("number2").value);
    let output = document.getElementById("display");
    if (option == "+") {
        output.value = n1 + n2;
    } else if (option == "-") {
        output.value = n1 - n2;
    } else if (option == "*") {
        output.value = n1 * n2;
    } else if (option == "/") {
        output.value = n1 / n2;
    }
})