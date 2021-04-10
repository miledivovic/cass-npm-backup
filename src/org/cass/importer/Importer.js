/**
 *  Base class for all importers, can hold helper functions
 *  that are useful for all importers
 * 
 *  @author devlin.junker@eduworks.com
 *  @module org.cassproject
 *  @class Importer
 *  @abstract
 */
module.exports = class Importer{
    static isObject(obj) {
        return Object.toString.call(obj) == "[object Object]";
    };
    static isArray(obj) {
        return Object.toString.call(obj) == "[object Array]";
    };
};
