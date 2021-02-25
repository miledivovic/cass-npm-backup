/**
 *  Base class for all importers, can hold helper functions
 *  that are useful for all importers
 * 
 *  @author devlin.junker@eduworks.com
 *  @module org.cassproject
 *  @class Importer
 *  @abstract
 */
var Importer = function() {};
Importer = stjs.extend(Importer, null, [], function(constructor, prototype) {
    constructor.isObject = function(obj) {
        return Object.prototype.toString.call(obj) == "[object Object]";
    };
    constructor.isArray = function(obj) {
        return Object.prototype.toString.call(obj) == "[object Array]";
    };
}, {}, {});
