/**
 *  Location of strings that store the current namespace for EBAC/KBAC.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class Ebac
 *  @module org.cassproject
 */
var Ebac = function() {};
Ebac = stjs.extend(Ebac, null, [], function(constructor, prototype) {
    constructor.context_0_1 = "http://schema.eduworks.com/ebac/0.1";
    constructor.context_0_2 = "http://schema.eduworks.com/ebac/0.2";
    constructor.context_0_3 = "http://schema.cassproject.org/kbac/0.2";
    constructor.context_0_4 = "https://schema.cassproject.org/kbac/0.4";
    /**
     *  Current version of KBAC.
     * 
     *  @property context
     *  @static
     *  @type string (URL)
     */
    constructor.context = Ebac.context_0_4;
}, {}, {});
