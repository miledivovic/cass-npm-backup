var EcDate = function() {};
EcDate = stjs.extend(EcDate, null, [], function(constructor, prototype) {
    /**
     *  Returns an ISO 8601 TimeDate String from a Date object.
     *  @param {Date} obj Date Object
     *  @memberOf EcDate
     *  @static
     *  @return
     */
    constructor.toISOString = function(obj) {
        return ((obj)["toISOString"])();
    };
}, {}, {});
