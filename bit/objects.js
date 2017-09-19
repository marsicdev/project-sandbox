(function () {
    // Example 1
    function _keys(obj) {
        if (!isObject(obj)) return [];
        if (Object.keys) return Object.keys(obj);
        var keys = [];
        for (var key in obj)
            if (_.has(obj, key)) keys.push(key);
        return keys;
    }

    function isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }
    console.log(_keys({
        red: "#FF0000",
        green: "#00FF00",
        white: "#FFFFFF"
    }));

    // Example 2

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    console.log(student);
    delete student.rollno;
    console.log(student);

    // Example 3

    Object.objsize = function (myObj) {
        var osize = 0,
            key;
        for (key in myObj) {
            if (myObj.hasOwnProperty(key)) osize++;
        }
        return osize;
    };

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    var objsize = Object.objsize(student);
    console.log('Size of the current object : ' + objsize);

    // Example 4

    var library = [{
            title: 'Bill Gates',
            author: 'The Road Ahead',
            readingStatus: true
        },
        {
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            readingStatus: true
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            readingStatus: false
        }
    ];

    for (var i = 0; i < library.length; i++) {
        var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
        if (library[i].readingStatus) {
            console.log("Already read " + book);
        } else {
            console.log("You still need to read " + book);
        }
    }

    // Example 5

    function Cylinder(cylHeight, cylDiameter) {
        this.cylHeight = cylHeight;
        this.cylDiameter = cylDiameter;
    }

    Cylinder.prototype.Volume = function () {
        var radius = this.cylDiameter / 2;
        return this.cylHeight * Math.PI * radius * radius;
    };

    var cyl = new Cylinder(7, 4);
    // Volume of the cylinder with four decimal places.
    console.log('volume =', cyl.Volume().toFixed(4));

    // Example 6

    Array.prototype.bubbleSort = function () {
        var isSorted = false;
        while (!isSorted) {
            isSorted = true;
            for (var n = 0; n < this.length - 1; n++) {
                if (this[n] > this[n + 1]) {
                    var x = this[n + 1];
                    this[n + 1] = this[n];
                    this[n] = x;
                    isSorted = false;
                }
            }
        }
        return this;
    };

    console.log([6, 4, 0, 3, -2, 1].bubbleSort());

    // Example 7

    String.prototype.subString = function () {
        var subset = [];
        for (var m = 0; m < this.length; m++) {
            for (var n = m + 1; n < this.length + 1; n++) {
                subset.push(this.slice(m, n));
            }
        }
        return subset;
    };

    console.log("dog".subString());

    // Example 8

    function MyClock() {
        this.cur_date = new Date();
        this.hours = this.cur_date.getHours();
        this.minutes = this.cur_date.getMinutes();
        this.seconds = this.cur_date.getSeconds();
    }

    MyClock.prototype.run = function () {
        setInterval(this.update.bind(this), 1000);
    };

    MyClock.prototype.update = function () {
        this.updateTime(1);
        console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    };

    MyClock.prototype.updateTime = function (secs) {
        this.seconds += secs;
        if (this.seconds >= 60) {
            this.minutes++;
            this.seconds = 0;
        }
        if (this.minutes >= 60) {
            this.hours++;
            this.minutes = 0;
        }
        if (this.hours >= 24) {
            this.hours = 0;
        }
    };

    var clock = new MyClock();
    clock.run();

    // Example 9

    function circle(radius) {
        this.radius = radius;
        // area method
        this.area = function () {
            return Math.PI * this.radius * this.radius;
        };
        // perimeter method
        this.perimeter = function () {
            return 2 * Math.PI * this.radius;
        };
    }
    var c = new circle(3);

    console.log('Area =', c.area().toFixed(2));
    console.log('perimeter =', c.perimeter().toFixed(2));

    // Example 10

    var library = [{
            title: 'Bill Gates',
            author: 'The Road Ahead',
            libraryID: 1254
        },
        {
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            libraryID: 4264
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            libraryID: 3245
        }
    ];

    var sortBy = function (fieldName, reverse, initial) {

        var key = initial ?
            function (x) {
                return initial(x[fieldName]);
            } :
            function (x) {
                return x[fieldName];
            };

        reverse = !reverse ? 1 : -1;

        return function (x, y) {
            return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
        };
    };

    var newobj = library.sort(sortBy('libraryID', true, parseInt));

    console.log(newobj);

    // Example 11

    function allProperties(obj) {
        return Object.getOwnPropertyNames(obj);
    }

    console.log(allProperties(Math));
    console.log(allProperties(Array));

    // Example 12

    function parse_URL(url) {
        var a = document.createElement('a');
        a.href = url;
        return {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function () {
                var ret = {},
                    seg = a.search.replace(/^\?/, '').split('&'),
                    len = seg.length,
                    i = 0,
                    s;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }
                return ret;
            })(),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/')
        };
    }

    console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));

    // Example 13

    function allKeys(obj) {
        if (!isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        return keys;
    }

    function isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }

    function Student(name) {
        this.name = name;
    }

    Student.prototype.rollno = true;
    console.log(allKeys(new Student("Sara")));

    // Example 14

    function allValues(obj) {
        var keys = _keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    }

    function _keys(obj) {
        if (!isObject(obj)) return [];
        if (Object.keys) return Object.keys(obj);
        var keys = [];
        for (var key in obj)
            if (_.has(obj, key)) keys.push(key);
        return keys;
    }

    function isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }
    
    var color = {
        red: "#FF0000",
        green: "#00FF00",
        white: "#FFFFFF"
    }
    
    console.log(color)
    console.log(allValues(color));

    // Example 15

    function keyValuePairs(obj) {
        var keys = _keys(obj);
        var length = keys.length;
        var pairs = Array(length);
        for (var i = 0; i < length; i++) {
            pairs[i] = [keys[i], obj[keys[i]]];
        }
        return pairs;
    }

    function _keys(obj) {
        if (!isObject(obj)) return [];
        if (Object.keys) return Object.keys(obj);
        var keys = [];
        for (var key in obj)
            if (_.has(obj, key)) keys.push(key);
        return keys;
    }

    function isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }
    console.log(keyValuePairs({
        red: "#FF0000",
        green: "#00FF00",
        white: "#FFFFFF"
    }));

    // Example 16

    function invertKeyValue(obj) {
        var result = {};
        var keys = _keys(obj);
        for (var i = 0, length = keys.length; i < length; i++) {
            result[obj[keys[i]]] = keys[i];
        }
        return result;
    }

    function _keys(obj) {
        if (!isObject(obj)) return [];
        if (Object.keys) return Object.keys(obj);
        var keys = [];
        for (var key in obj)
            if (_.has(obj, key)) keys.push(key);
        return keys;
    }

    function isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }
    console.log(invertKeyValue({
        red: "#FF0000",
        green: "#00FF00",
        white: "#FFFFFF"
    }));

    // Example 17

    function hasKey(obj, key) {
        return obj != null && hasOwnProperty.call(obj, key);
    }

    console.log(hasKey({
        red: "#FF0000",
        green: "#00FF00",
        white: "#FFFFFF"
    }, "green"));

    // Example 18

    function isDomElement(obj) {
        return !!(obj && obj.nodeType === 1);
    }

    console.log(isDomElement(jQuery('body')[0]));


})();