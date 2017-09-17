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
     * JavaScript introduction
     */
    console.groupCollapsed('JavaScript introduction')
    console.groupCollapsed('Variables')

    var first = 10;
    var second = 20;
    var sum = first + second;

    console.log(sum);
    console.assert(sum == 30)
    // Output: 30

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('Variable change value')
    age = 25;
    console.log(age)
    // Output: 25
    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('example 2');
    text = "This is variable text";
    console.log(text);
    // Output: This is variable text
    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed('example 2');

    var school = "Belgrade Institute of Technology\n";
    var course = 'Computer Science\n';
    var lecture = "\tJavaScript\n";

    console.log(school);
    console.log(course);
    console.log(lecture);

    // Output: 
    // Belgrade Institute of Technology
    // Computer Science
    //      JavaScript

    console.groupEnd();
    console.groupEnd() // End JavaScript introduction

    /**
     * Ex. Values, Types, and Operators
     */
    console.group('Ex. Values, Types, and Operators');

    console.groupCollapsed('1. Check if input is string');

    var isString = function (input) {
        if (typeof input === 'string' || input instanceof String) {
            return true;
        } else {
            return false;
        }
    };

    // Testing casses
    section("Test casses")

    assertFalse(isString())
    assertFalse(isString(2))
    assertTrue(isString("2"))

    section("output")

    console.log(isString(2)); // false
    console.log(isString(' ')); //true
    console.log(isString('bit')); //true
    console.log(isString([1, 2, 4, 0])); //false

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed('2. isBlank');
    var isBlank = function (input) {
        if (input.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    assertTrue(isBlank(''))
    assertFalse(isBlank(' '))
    assertFalse(isBlank('1234'))

    console.log(isBlank('')); // true
    console.log(isBlank('abc')); // false

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('3. String to array')

    var stringToArray = function (input) {
        var separator = " "
        return input.trim().split(separator)
    }

    var input = "John Snow"
    var result = stringToArray(input)
    var expectedResult = ["John", "Snow"]

    assertTrue(result.indexOf(expectedResult) === -1)

    console.log(stringToArray("John Snow"))

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('4. Cut string')

    var cutString = function (inputString, length) {
        if (isString(inputString) && (length > 0)) {
            return inputString.slice(0, length);
        }
    };

    var input = "Belgrade";
    var result = cutString(input, 3);
    var expectedResult = "Bel";

    assertTrue(result === expectedResult);

    console.log(cutString("Belgrade", 2));
    console.log(cutString("John Show", 3));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('5. Abbrev. name')

    var abbrevName = function (inputString) {
        var splitNames = inputString.trim().split(" ");
        if (splitNames.length > 1) {
            return (splitNames[0] + " " + splitNames[1].charAt(0) + ".");
        }
        return splitNames[0];
    };

    // Test
    var input = "John Snow";
    var result = abbrevName(input);
    var expectedResult = "John S.";

    assertTrue(result === expectedResult);

    // Output
    console.log(abbrevName("John Snow"));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('6. Hide email')

    var hideEmail = function (userEmail) {
        var avg, splitted, emailName, emailDomain;

        splitted = userEmail.split("@");
        emailName = splitted[0];
        emailDomain = splitted[1];

        avg = emailName.length / 2;

        emailName = emailName.substring(0, (emailName.length - avg));

        return emailName + "...@" + emailDomain;
    };

    // Test
    var input = "somerandomaddress@example.com";
    var result = hideEmail(input);
    var expectedResult = "somerand...@example.com";

    assertTrue(result.indexOf("...") != -1)
    assertTrue(result === expectedResult);

    // Output
    console.log(hideEmail("somerandomaddress@example.com"));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('7. Parameterize string')

    var parameterizeString = function (str1) {
        // return str1.trim().toLowerCase().replace(/\s/g, "-");
        return str1.trim() // remove white space
            .toLowerCase() // set all to lowercase
            .replace(/[^a-zA-Z0-9 -]/, "") // Remove all that is not a number or character
            .replace(/\s/g, "-"); // Replase space with dash
    };

    // Test
    var input = "This is programming 101";
    var result = parameterizeString(input);
    var expectedResult = "this-is-programming-101";

    assertTrue(result === expectedResult);

    console.log(parameterizeString("This is programming 101."));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('8. Capitalize first letter')

    var capitalize = function (str1) {
        return str1.charAt(0).toUpperCase() + str1.slice(1);
    }

    // Test
    var input = "js string exercises";
    var result = capitalize(input);
    var expectedResult = "Js string exercises";

    assertTrue(result === expectedResult);

    console.log(capitalize('computer science'));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('9. Capitalize words')

    // Capitalize Words 
    function capitalizeWords(str) {

        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    // Test
    var input = "js string exercises";
    var result = capitalizeWords(input);
    var expectedResult = "Js String Exercises";

    assertTrue(result === expectedResult);

    console.log(capitalizeWords('this is all lower case string'));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('10. Swap case')

    var swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }

    // Test
    var input = "AaaaBbbbbCccDdd";
    var result = swapcase(input);
    var expectedResult = "aAAAbBBBBcCCdDD";

    assertTrue(result === expectedResult);

    console.log(swapcase('AaaaBbbbbCccDddEEEEEEEfffff'));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('11. Convert a string into camel case')

    var camelize = function camelize(str) {
        return str.replace(/\W+(.)/g, function (match, chr) {
            return chr.toUpperCase();
        });
    }

    // Test
    var input = "some random non camel case string";
    var result = camelize(input);
    var expectedResult = "someRandomNonCamelCaseString";

    assertTrue(result === expectedResult);

    console.log(camelize("javaScript Exercises"));
    console.log(camelize("JavaScript exercises"));
    console.log(camelize("Java Script Exercises"));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('12. Uncamelize string')

    function uncamelize(str, separator) {
        // Assume default separator is a single space.
        if (typeof separator == "undefined") {
            separator = " ";
        }

        // Replace all capital letters by separator followed by lowercase one
        var str = str.replace(/[A-Z]/g, function (letter) {
            return separator + letter.toLowerCase();
        });

        // Remove first separator
        return str.replace("/^" + separator + "/", '');
    }

    // Test
    assertTrue(uncamelize("helloWorld") === "hello world");

    console.log(uncamelize('helloWorld'));
    console.log(uncamelize('helloWorld', '-'));
    console.log(uncamelize('helloWorld', '_'));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('13. Concatenates a given string N times')

    var repeat = function repeat(str, count) {
        if (typeof count == "undefined") {
            count = 1;
        }
        return count < 1 ? '' : new Array(count + 1).join(str);
    }

    // Test
    assertTrue(repeat('Hi', 3) === 'HiHiHi')

    console.log(repeat('Ha!'));
    console.log(repeat('Ha!', 2));
    console.log(repeat('Ha!', 3));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('14. Insert string at position')

    var insert = function insert(mainString, insertString, pos) {

        if (typeof (pos) == "undefined") {
            pos = 0;
        }

        if (typeof (insertString) == "undefined") {
            insertString = '';
        }

        var result = mainString.slice(0, pos) + insertString + mainString.slice(pos);
        return result;
    }

    assertTrue(insert("Hi ", "JavaScript", 3) === "Hi JavaScript");

    console.log(insert('We are doing some exercises.'));
    console.log(insert('We are doing some exercises.', 'JavaScript '));
    console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('15. Humanize number')

    var humanizeNumber = function humanize(num) {
        if (typeof num == "undefined") {
            return;
        }

        if (num % 100 >= 11 && num % 100 <= 13) {
            return num + "th";
        }

        switch (num % 10) {
            case 1:
                return num + "st";
            case 2:
                return num + "nd";
            case 3:
                return num + "rd";
        }
        return num + "th";
    }

    // Tets cases
    assertTrue(humanizeNumber() === undefined)
    assertTrue(humanizeNumber(1) === "1st")

    // Output
    console.log(humanizeNumber());
    console.log(humanizeNumber(1));
    console.log(humanizeNumber(8));
    console.log(humanizeNumber(301));
    console.log(humanizeNumber(402));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('16. Truncate text')

    var truncateText = function (str, length, ending) {
        if (length == null) {
            length = 100;
        }

        if (ending == null) {
            ending = '...';
        }

        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    };

    // Test
    assertTrue(truncateText("Title very long long", 18) === "Title very long...")
    assertTrue(truncateText("Title very long long", 18, "!!!") === "Title very long!!!")
    assertTrue(truncateText("Title very long long") === "Title very long long")

    // Output
    console.log(truncateText('We are doing JS string exercises.'))
    console.log(truncateText('We are doing JS string exercises.', 19))
    console.log(truncateText('We are doing JS string exercises.', 15, '!!'))

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('17. Chop string in chunks')

    var stringChop = function (str, size) {
        if (str == null) {
            return [];
        }

        str = String(str);
        size = ~~size;

        return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
    }

    console.log(stringChop('w3resource'));
    console.log(stringChop('w3resource', 2));
    console.log(stringChop('w3resource', 3));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('18. Count text occurrence')

    function countOccurance(mainStr, subStr) {
        mainStr += '';
        subStr += '';

        if (subStr.length <= 0) {
            return mainStr.length + 1;
        }

        subStr = subStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return (mainStr.match(new RegExp(subStr, 'gi')) || []).length;
    }

    console.log(countOccurance("The quick brown fox jumps over the lazy dog", 'the'));
    console.log(countOccurance("The quick brown fox jumps over the lazy dog", 'fox', false));

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed('19. escape HTML')

    function escapeHTML(htmlStr) {
        'use strict';

        return htmlStr.replace(/[&<>"]/g, function (tag) {
            var charsToReplace = {
                '&': '&',
                '<': '<',
                '>': '>',
                '"': '"'
            };

            return charsToReplace[tag] || tag;
        });
    }

    console.log(escapeHTML(''));

    console.log(escapeHTML('<a href="javascript-string-exercise-19.html">'))

    console.groupEnd()

    ////////////////////////////////////////////////

    console.groupCollapsed("20. Pad string");

    function formattedString(pad, inputString, padPosition) {
        if (typeof inputString === 'undefined')
            return pad;
        if (padPosition == 'l') {
            return (pad + inputString).slice(-pad.length);
        } else {
            return (inputString + pad).substring(0, pad.length);
        }
    }

    console.log(formattedString('0000', 123, 'l')); // 0123
    console.log(formattedString('00000000', 123, '')); //12300000

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("21. Repeat a string a specified times");

    function repeat_string(string, count) {
        if ((string == null) || (count < 0) || (count === Infinity) || (count == null)) {
            return ('Error in string or count.');
        }
        count = count | 0; // Floor count.
        return new Array(count + 1).join(string);
    }

    console.log(repeat_string('a', 4.6));
    console.log(repeat_string('a'));
    console.log(repeat_string('a', -2));
    console.log(repeat_string('a', Infinity));

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("22. ");

    function substringAfterChars(str, char, pos) {
        if (pos == 'b') {
            return str.substring(str.indexOf(char) + 1);
        } else if (pos == 'a') {
            return str.substring(0, str.indexOf(char));
        } else {
            return str;
        }
    }

    console.log(substringAfterChars('w3resource: JavaScript Exercises', ':', 'a'));
    console.log(substringAfterChars('w3resource: JavaScript Exercises', 'E', 'b'));

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("23. Strip leading and trailing spaces");

    function strip(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }

    console.log(strip('JavaScript '));
    console.log(strip(' JavaScript'));
    console.log(strip(' Java Script  '));

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("24. Truncate string to number of words");

    function truncate(inputString, numberOfWords) {
        return inputString.split(" ").splice(0, numberOfWords).join(" ");
    }

    console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("25. Alphabetize string");

    function alphabetizeString(inputString) {
        return inputString.split('').sort().join('').trim();
    }

    console.log(alphabetizeString('Rebublic Of Serbia'));

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("26. Remove the first occurrence of search term");

    function removeFirstOccurrence(str, searchTerm) {
        var index = str.indexOf(searchTerm);
        if (index === -1) {
            return str;
        }

        return str.slice(0, index) + str.slice(index + searchTerm.length);
    }

    console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("27. ASCII to HEX");

    function asciiToHexa(str) {
        var arr1 = [];
        for (var n = 0, l = str.length; n < l; n++) {
            var hex = Number(str.charCodeAt(n)).toString(16);
            arr1.push(hex);
        }
        return arr1.join('');
    }

    console.log(asciiToHexa('12'));
    console.log(asciiToHexa('100'));

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("28. HEX to ASCII");

    function hexToAscii(str1) {
        var hex = str1.toString();
        var str = '';

        for (var n = 0; n < hex.length; n += 2) {
            str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }

        return str;
    }

    console.log(hexToAscii('3132'));
    console.log(hexToAscii('313030'));

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("29. Find a word count within a string");

    function searchWordCount(text, word) {

        var x = 0,
            y = 0;

        for (i = 0; i < text.length; i++) {
            if (text[i] == word[0]) {
                for (j = i; j < i + word.length; j++) {
                    if (text[j] == word[j - i]) {
                        y++;
                    }
                    if (y == word.length) {
                        x++;
                    }
                }
                y = 0;
            }
        }
        return "'" + word + "' was found " + x + " times.";
    }

    console.log(searchWordCount('The quick brown fox', 'fox'));
    console.log(searchWordCount('aa, bb, cc, dd, aa', 'aa'));

    console.groupEnd();

    ////////////////////////////////////////////////

    console.groupCollapsed("30. String ends with specified suffix");

    function stringEndsWith(inputString, suffix) {

        var inputNullOrEmpty = (inputString === null) || (inputString === '')
        var suffixNullOrEmpty = (suffix === null) || (suffix === '')

        if (inputNullOrEmpty || suffixNullOrEmpty) {
            return false;
        } else {
            inputString = inputString.toString();
            suffix = suffix.toString();
        }

        var index = inputString.indexOf(suffix, inputString.length - suffix.length)
        return index !== -1;
    }

    console.log(stringEndsWith('JS JAVA PYTHON', 'PYTHON'));
    console.log(stringEndsWith('JS JAVA PYTHON', 'ON'));


    console.groupEnd();

})();