/**
 *  Object Helper Functions
 *
 *  @author fritz.ray@eduworks.com
 *  @class EcObject
 *  @module com.eduworks.ec
 */
module.exports = class EcObject {
	/**
	 *  Returns true if the result is an object.
	 *
	 *  @param {any} o Object to test.
	 *  @return true iff the object is an object.
	 *  @static
	 *  @method isArray
	 */
	static isObject = function(o) {
		if (EcArray.isArray(o)) return false;
		if (o == null) return false;
		return typeof o == "object";
	};
	/**
	 *  Returns keys on the object
	 *
	 *  @param {any} o Object to test.
	 *  @return List of keys
	 *  @static
	 *  @method keys
	 */
	static keys = function(o) {
		return Object.keys(o);
	};
};
