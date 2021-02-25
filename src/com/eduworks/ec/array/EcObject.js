/**
 *  Object Helper Functions
 * 
 *  @author fritz.ray@eduworks.com
 *  @class EcObject
 *  @module com.eduworks.ec
 */
var EcObject = function() {};
EcObject = stjs.extend(EcObject, null, [], function(constructor, prototype) {
    /**
     *  Returns true if the result is an object.
     * 
     *  @param {any} o Object to test.
     *  @return true iff the object is an object.
     *  @static
     *  @method isArray
     */
    constructor.isObject = function(o) {
        if (EcArray.isArray(o)) 
            return false;
        if (o == null) 
            return false;
        return (typeof o) == "object";
    };
    /**
     *  Returns keys on the object
     * 
     *  @param {any} o Object to test.
     *  @return List of keys
     *  @static
     *  @method keys
     */
    constructor.keys = function(o) {
        return ecKeys(o);
    };
}, {}, {});
