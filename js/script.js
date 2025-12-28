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

// JavaScript function for finds factorial of a number.
function findFactorial() {
    let num = Number(document.getElementById("factNum").value);

    if (isNaN(num) || num < 0) {
        document.getElementById("factResult").innerText = "Invalid input";
        return;
    }

    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    document.getElementById("factResult").innerText = fact;
}

// JavaScript function for reverses a number.
function reverseNumber() {
    let num = Number(document.getElementById("revNum").value);

    if (isNaN(num)) {
        document.getElementById("revResult").innerText = "Invalid input";
        return;
    }

    let reversed = 0;
    let temp = Math.abs(num);

    while (temp > 0) {
        reversed = (reversed * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }

    // handle negative numbers
    if (num < 0) reversed = -reversed;

    document.getElementById("revResult").innerText = reversed;
}




