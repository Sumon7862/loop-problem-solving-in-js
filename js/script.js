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

// JavaScript function for prints odd numbers from 1 to 20.
function printOddNumbers() {
    let result = "";

    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddResult").innerText = result;
}

// JavaScript function for prints multiplication table of 5.
function printTableOfFive() {
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += "5 × " + i + " = " + (5 * i) + "\n";
    }

    document.getElementById("tableResult").innerText = result;
}

// JavaScript function for sums numbers from 1 to 100.
function sumOneToHundred() {
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        sum += i;
    }

    document.getElementById("sumResult").innerText = sum;
}



