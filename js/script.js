// JavaScript function for prints numbers from 1 to 10.
function printOneToTen() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }

    document.getElementById("printResult").innerText = result;
}

// JavaScript function for prints even numbers from 1 to 20.
function printEvenNumbers() {
    let result = "";

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }

    document.getElementById("evenResult").innerText = result;
}
