(function () {

    ////////////////////////////////////////////////

    console.groupCollapsed('1. Reverse number')

    function reverseNumber(num) {
        num = num + "";
        return num.split("").reverse().join("");
    }

    var result = reverseNumber(12345)

    console.log(typeof result);
    console.log(result);

    // Explanation
    console.log('1000'.split(""));
    // Output : ["1", "0", "0", "0"]

    console.log(["1", "0", "0", "0"].reverse());
    // Output : ["0", "0", "0", "1"]

    console.log(["1", "0", "0", "0"].reverse().join(""));
    // Output : "0001"

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('2. Palindrome')

    // Write a JavaScript function that checks whether a passed string is palindrome or not? 
    function isPalindrome(inputString) {
        // Change the string into lower case
        var cstr = inputString.toLowerCase();
        var ccount = 0;

        // Check whether the string is empty or not
        if (cstr === "") {
            console.log("Nothing found!");
            return false;
        }
        // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
            // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
                // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }

        // Loop through to check the first character 
        // to the last character and then move next
        for (var x = 0; x < ccount; x++) {
            // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1 - x)[0]) {
                return false;
            }
        }

        return true;
    }

    console.log(isPalindrome('madam'));
    console.log(isPalindrome('nurses run'));
    console.log(isPalindrome('fox'));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('3. String combinations')

    //Write a JavaScript function that generates all combinations of a string.
    function substrings(inputString) {
        var array1 = [];

        for (var x = 0, y = 1; x < inputString.length; x++, y++) {
            array1[x] = inputString.substring(x, y);
        }

        var combination = [];
        var temp = "";

        var slent = Math.pow(2, array1.length);

        for (var i = 0; i < slent; i++) {
            temp = "";
            for (var j = 0; j < array1.length; j++) {
                if ((i & Math.pow(2, j))) {
                    temp += array1[j];
                }
            }
            if (temp !== "") {
                combination.push(temp);
            }
        }

        console.log(combination.join("\n"));
    }

    console.log(substrings("dog"));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('4. Sort letters')

    function sortAlphabetOrder(str) {
        return str.split('').sort().join('');
    }

    console.log(sortAlphabetOrder("webmaster"));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('5. Reverse number')

    //Write a function that accepts a string as a parameter and converts 
    //the first letter of each word of the string in upper case.
    function uppercase(str) {

        var array1 = str.split(' ');
        var newarray1 = [];

        for (var x = 0; x < array1.length; x++) {
            newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
        }

        return newarray1.join(' ');
    }

    console.log(uppercase("the quick brown fox"));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('6. Find longest word')

    function findLongestWord(str) {

        var array1 = str.match(/\w[a-z]{0,}/gi);
        var result = array1[0];

        for (var x = 1; x < array1.length; x++) {
            if (result.length < array1[x].length) {
                result = array1[x];
            }
        }

        return result;
    }

    console.log(findLongestWord('Web Development Tutorial'));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('7. Count vowels in a string')

    function vowelCount(inputString) {
        var vowelList = 'aeiouAEIOU';
        var vowelCount = 0;

        for (var x = 0; x < inputString.length; x++) {
            if (vowelList.indexOf(inputString[x]) !== -1) {
                vowelCount += 1;
            }

        }
        return vowelCount;
    }

    console.log(vowelCount("The quick brown fox"));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('8. Prime number')

    function isPrimeNumber(n) {

        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    console.log(isPrimeNumber(37));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('9. Detect data type')

    function detectDataType(value) {
        var dtypes = [Function, RegExp, Number, String, Boolean, Object],
            x, len;

        if (typeof value === "object" || typeof value === "function") {
            for (x = 0, len = dtypes.length; x < len; x++) {
                if (value instanceof dtypes[x]) {
                    return dtypes[x];
                }
            }
        }

        return typeof value;
    }

    console.log(detectDataType(12));
    console.log(detectDataType('development'));
    console.log(detectDataType(false));

    console.groupEnd()
    ////////////////////////////////////////////////

    console.groupCollapsed('10. Draw matrix')

    function matrix(n) {

        var i;
        var j;

        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (i === j) {
                    console.log(' 1 ');
                } else {
                    console.log(' 0 ');
                }
            }
            console.log('----------');
        }
    }

    matrix(4)

    console.groupEnd()
    ////////////////////////////////////////////////

    console.groupCollapsed('11. Detect data type')

    function secondGreatestLowest(inputArray) {

        inputArray.sort(function (x, y) {
            return x - y;
        });

        var uniqa = [inputArray[0]];
        var result = [];

        for (var j = 1; j < inputArray.length; j++) {
            if (inputArray[j - 1] !== inputArray[j]) {
                uniqa.push(inputArray[j]);
            }
        }

        result.push(uniqa[1], uniqa[uniqa.length - 2]);
        return result.join(',');
    }

    console.log(secondGreatestLowest([1, 2, 3, 4, 5]));

    console.groupEnd()
    ////////////////////////////////////////////////

    console.groupCollapsed('12. Perfect number')

    function isPerfect(number) {
        var temp = 0;
        for (var i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                temp += i;
            }
        }

        if (temp === number && temp !== 0) {
            console.log(number + " is a perfect number.");
        } else {
            console.log(num + " is not a perfect number.");
        }
    }

    isPerfect(28);

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('13. Num factors')

    function factors(n) {
        var numFactors = [],
            i;

        for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
            if (n % i === 0) {
                numFactors.push(i);
                if (n / i !== i)
                    numFactors.push(n / i);
            }
        numFactors.sort(function (x, y) {
            return x - y;
        }); // numeric sort
        return numFactors;
    }

    console.log(factors(15)); // [1,3,5,15] 
    console.log(factors(16)); // [1,2,4,8,16] 
    console.log(factors(17)); // [1,17]

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('14. Amount to coins')

    function amountToCoins(amount, coins) {
        if (amount === 0) {
            return [];
        } else {
            if (amount >= coins[0]) {
                left = (amount - coins[0]);
                return [coins[0]].concat(amountToCoins(left, coins));
            } else {
                coins.shift();
                return amountToCoins(amount, coins);
            }
        }
    }

    console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('15. Exponent bn')

    function exp(b, n) {
        var ans = 1;
        for (var i = 1; i <= n; i++) {
            ans = b * ans;
        }
        return ans;
    }

    console.log(exp(2, 5));

    console.groupEnd()

})();