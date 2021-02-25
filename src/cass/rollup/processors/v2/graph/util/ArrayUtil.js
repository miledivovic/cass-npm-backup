var ArrayUtil = function() {};
ArrayUtil = stjs.extend(ArrayUtil, null, [], function(constructor, prototype) {
    constructor.arrayContains = function(a, o) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] == o) 
                return true;
        }
        return false;
    };
    constructor.arrayRemove = function(a, o) {
        var retArray = new Array();
        for (var i = 0; i < a.length; i++) {
            if (a[i] != o) 
                retArray.push(a[i]);
        }
        return retArray;
    };
    constructor.arrayLastIndexOf = function(a, o) {
        for (var i = (a.length - 1); i >= 0; i--) {
            if (a[i] == o) 
                return i;
        }
        return -1;
    };
    constructor.arrayToString = function(a) {
        if (a == null || a.length == 0) 
            return "<Emtpy>";
        var ret = "";
        for (var i = 0; i < a.length; i++) {
            if ((i + 1) < a.length) 
                ret = ret + a[i].toString() + ", ";
             else 
                ret = ret + a[i].toString();
        }
        return ret;
    };
}, {}, {});
