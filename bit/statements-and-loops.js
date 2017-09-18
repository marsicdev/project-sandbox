(function () {

    /*******************************************
     * Helper functions
     *******************************************/

    // Asssert function
    function assert(condition, message) {
        if (!condition) {
            throw new Error(message || 'Assertion failed');
        }
    }

    // Asssert function
    function assertTrue(condition) {
        console.assert(condition === true, 'Expected outcome to be TRUE but actuall was FALSE');
        if (condition === true) {
            console.info("PASS")
        }
    }

    // Asssert function
    function assertFalse(condition) {
        console.assert(condition === false, 'Expected outcome to be FALSE but actuall was TRUE');
        if (condition === false) {
            console.info("PASS")
        }
    }

    function section(msg) {
        console.log("-----" + msg.toUpperCase() + "-----");
    }

    /*******************************************
     * Examples
     *******************************************/

    /**
     * Statements and loops
     */
    console.groupCollapsed('Statements and loops')

    console.groupCollapsed('1. bigger of two numbers')

    var num1, num2;
    num1 = window.prompt("Input the First integer", "0");
    num2 = window.prompt("Input the second integer", "0");

    if (parseInt(num1, 10) > parseInt(num2, 10)) {
        console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
    } else
    if (parseInt(num2, 10) > parseInt(num1, 10)) {
        console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
    } else {
        console.log("The values " + num1 + " and " + num2 + " are equal.");
    }

    console.groupEnd();

    ////////////////////////////////////////////////        

    console.groupCollapsed('2. Sign of product')

    var x = 3;
    var y = -7;
    var z = 2;

    if (x > 0 && y > 0 && z > 0) {
        alert("The sign is +");
    } else if (x < 0 && y < 0 && z < 0) {
        console.log("The sign is +");
    } else if (x > 0 && y < 0 && z < 0) {
        console.log("The sign is +");
    } else if (x < 0 && y > 0 && z < 0) {
        console.log("The sign is +");
    } else {
        console.log("The sign is -");
    }

    console.groupEnd();

    ////////////////////////////////////////////////        

    console.groupCollapsed('3. Sort numbers')

    var x = 0;
    var y = -1;
    var z = 4;

    if (x > y && x > z) {
        if (y > z) {
            console.log(x + ", " + y + ", " + z);
        } else {
            console.log(x + ", " + z + ", " + y);
        }
    } else if (y > x && y > z) {
        if (x > z) {
            console.log(y + ", " + x + ", " + z);
        } else {
            console.log(y + ", " + z + ", " + x);
        }
    } else if (z > x && z > y) {
        if (x > y) {
            console.log(z + ", " + x + ", " + y);
        } else {
            console.log(z + ", " + y + ", " + x);
        }
    }

    console.groupEnd();

    ////////////////////////////////////////////////        

    console.groupCollapsed('4. Larges of 5 numbers')

    var a = -5;
    var b = -2;
    var c = 6;
    var d = 0;
    var f = -1;

    if (a > b && a > c && a > d && a > f) {
        console.log(a);
    } else if (b > a && b > c && b > d && b > f) {
        console.log(b);
    } else if (c > a && c > b && c > d && c > f) {
        console.log(c);
    } else if (d > a && d > c && d > b && d > f) {
        console.log(d);
    } else {
        console.log(f);
    }

    console.groupEnd();

    ////////////////////////////////////////////////        

    console.groupCollapsed('5. Even or odd number')

    for (var x = 0; x <= 15; x++) {
        if (x === 0) {
            console.log(x + " is even");
        } else if (x % 2 === 0) {
            console.log(x + " is even");
        } else {
            console.log(x + " is odd");
        }
    }

    console.groupEnd();

    ////////////////////////////////////////////////             

    console.groupCollapsed('6. Greates common divisor')

    var a = 2154; //First number
    var b = 458; //Second number 
    var gcd;

    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    gcd = a;

    console.log(gcd);

    console.groupEnd();

    ////////////////////////////////////////////////        

    console.groupCollapsed('7. Sum of multiple 3 and 5')

    var sum = 0;
    for (var x = 0; x < 1000; x++) {
        if (x % 3 === 0 || x % 5 === 0) {
            sum += x;
        }
    }

    console.log(sum);

    console.groupEnd();

    ////////////////////////////////////////////////        

    console.groupCollapsed('8. Three digits amstrongs number')

    function threeDigitArmstrongNumber() {
        for (var i = 1; i < 10; ++i) {
            for (var j = 0; j < 10; ++j) {
                for (var k = 0; k < 10; ++k) {
                    var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                    var plus = (i * 100 + j * 10 + k);
                    if (pow == plus) {
                        console.log(pow);
                    }
                }
            }
        }
    }

    threeDigitArmstrongNumber();

    console.groupEnd();

    ////////////////////////////////////////////////        

    console.groupCollapsed('9. Fizz or Buzz')

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(i + " Fizz");
        } else if (i % 5 === 0) {
            console.log(i + " Buzz");
        } else {
            console.log(i);
        }
    }

    console.groupEnd();

    ////////////////////////////////////////////////        

    console.groupCollapsed('10. Avrage grade')

    var students = [
        ['David', 80],
        ['Marko', 77],
        ['Dany', 88],
        ['John', 95],
        ['Thomas', 68]
    ];

    var avrageMarks = 0;

    for (var i = 0; i < students.length; i++) {
        avrageMarks += students[i][1];
        var avg = avrageMarks / students.length;
    }

    console.info("Average grade: " + avrageMarks / students.length);

    if (avg < 60) {
        console.log("Grade : F");
    } else if (avg < 70) {
        console.log("Grade : D");
    } else if (avg < 80) {
        console.log("Grade : C");
    } else if (avg < 90) {
        console.log("Grade : B");
    } else if (avg < 100) {
        console.log("Grade : A");
    }

    console.groupEnd();  

    console.groupEnd(); // Group end

})();