(function (params) {

    var isArray = function (input) {
        if (toString.call(input) === "[object Array]")
            return true;
        return false;
    };

    console.log(isArray('BIT'));
    console.log(isArray([1, 2, 4, 0]));

    // Example 2

    var arrayClone = function (inputArray) {
        return inputArray.slice(0);
    };

    console.log(arrayClone([1, 2, 4, 0]));
    console.log(arrayClone([1, 2, [4, 0]]));

    // Example 3


    // Example 4

    var lastElement = function (array, n) {
        if (array == null) {
            return void 0;
        }
        if (n == null) {
            return array[array.length - 1];
        }

        return array.slice(Math.max(array.length - n, 0));
    };

    console.log(lastElement([7, 9, 0, -2]));
    console.log(lastElement([7, 9, 0, -2], 3));
    console.log(lastElement([7, 9, 0, -2], 6));


    // Example 5
    var myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.toString());
    console.log(myColor.join());
    console.log(myColor.join('+'));

    // Example 6

    function addDashes(num) {
        var str = num.toString();
        var result = [str[0]];

        for (var x = 1; x < str.length; x++) {
            if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
                result.push('-', str[x]);
            } else {
                result.push(str[x]);
            }
        }
        return result.join('');
    }

    console.log(addDashes(125468));

    // Example 7

    function sortArray(inputArray) {

        var sortedArray = [];
        var min = inputArray[0];
        var pos;
        max = inputArray[0];

        for (i = 0; i < inputArray.length; i++) {
            if (max < inputArray[i]) max = inputArray[i];
        }

        for (var i = 0; i < inputArray.length; i++) {
            for (var j = 0; j < inputArray.length; j++) {
                if (inputArray[j] != "x") {
                    if (min > inputArray[j]) {
                        min = inputArray[j];
                        pos = j;
                    }
                }
            }
            sortedArray[i] = min;
            inputArray[pos] = "x";
            min = max;
        }

        return sortedArray
    }

    var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
    console.log(sortArray(arr1));

    // Example 8

    function findFrequentItem(inputArr) {
        var mostFrequent = 1;
        var m = 0;
        var item;
        for (var i = 0; i < inputArr.length; i++) {
            for (var j = i; j < inputArr.length; j++) {
                if (inputArr[i] == inputArr[j])
                    m++;
                if (mostFrequent < m) {
                    mostFrequent = m;
                    item = inputArr[i];
                }
            }
            m = 0;
        }

        // output: item (number of times)
        return item + " ( " + mostFrequent + " times ) "
    }

    var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    console.log(findFrequentItem(arr1));

    // Example 9

    function replaceCase(str) {
        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var LOWER = 'abcdefghijklmnopqrstuvwxyz';
        var result = [];

        for (var x = 0; x < str.length; x++) {
            if (UPPER.indexOf(str[x]) !== -1) {
                result.push(str[x].toLowerCase());
            } else if (LOWER.indexOf(str[x]) !== -1) {
                result.push(str[x].toUpperCase());
            } else {
                result.push(str[x]);
            }
        }

        return result.join('');
    }

    console.log(replaceCase('The Quick Brown Fox'));


    // Example 10

    function printArrayElements(inputArr) {

        for (var i in inputArr) {
            console.log("row " + i);
            for (var j in inputArr[i]) {
                console.log(" " + inputArr[i][j]);
            }
        }
    }

    // a sample 2-D array 
    var a = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ];

    printArrayElements(a)

    // Example 11

    function sum_sq(array) {
        var sum = 0,
            i = array.length;
        while (i--) {
            sum += Math.pow(array[i], 2);
        }
        return sum;
    }

    console.log(sum_sq([0, 1, 2, 3, 4]));

    // Example 12

    var array = [1, 2, 3, 4, 5, 6],
        sum = 0,
        product = 1,
        i;

    for (i = 0; i < array.length; i += 1) {
        sum += array[i];
        product *= array[i];
    }

    console.log('Sum : ' + sum + ' Product :  ' + product);

    // Example 13
    // Example 14
    function removeDuplicates(num) {
        var x,
            length = num.length,
            output = [],
            obj = {};

        for (x = 0; x < length; x++) {
            obj[num[x]] = 0;
        }

        for (x in obj) {
            output.push(x);
        }

        return output;
    }

    var myNum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
    result = removeDuplicates(myNum);

    console.log(myNum);
    console.log(result);

    // Example 15

    var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

    function ordinalNumbers(n) {
        var o = ["th", "st", "nd", "rd"],
            x = n % 100;
        return x + (o[(x - 20) % 10] || o[x] || o[0]);
    }

    for (n = 0; n < color.length; n++) {
        var ordinal = n + 1;

        var output = (ordinalNumbers(ordinal) + " choice is " + color[n] + ".");

        console.log(output);
    }

    // Example 16
    // Example 17
    // Example 18
    // Example 19
    // Example 20
    // Example 20
})();