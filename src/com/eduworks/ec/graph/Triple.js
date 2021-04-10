/**
 *  Object to hold a triple, used in graph.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class Triple
 *  @module com.eduworks.ec
 */
module.exports = class Triple{
    /**
     *  Source vertex.
     * 
     *  @property source
     *  @type any
     */
    prototype.source = null;
    /**
     *  Destination vertex.
     * 
     *  @property destination
     *  @type any
     */
    prototype.destination = null;
    /**
     *  Object to hold in the edge.
     * 
     *  @property edge
     *  @type any
     */
    prototype.edge = null;
    /**
     *  Returns true IFF sources, destinations, and edges match.
     * 
     *  @param {Edge} obj
     *  @return {boolean} true IFF <see method definition>
     *  @method equals
     */
    prototype.equals = function(obj) {
        if (Object.prototype.equals.call(this, obj)) 
            return true;
        if (stjs.isInstanceOf(obj.constructor, Triple)) {
            var t = obj;
            if (this.source == t.source && this.destination == t.destination && this.edge == t.edge) 
                return true;
        }
        return false;
    };
}, {}, {});
