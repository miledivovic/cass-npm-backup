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
    source = null;
    /**
     *  Destination vertex.
     * 
     *  @property destination
     *  @type any
     */
    destination = null;
    /**
     *  Object to hold in the edge.
     * 
     *  @property edge
     *  @type any
     */
    edge = null;
    /**
     *  Returns true IFF sources, destinations, and edges match.
     * 
     *  @param {Edge} obj
     *  @return {boolean} true IFF <see method definition>
     *  @method equals
     */
    equals(obj) {
        if (Object.equals.call(this, obj)) 
            return true;
        if (obj instanceof Triple) {
            var t = obj;
            if (this.source == t.source && this.destination == t.destination && this.edge == t.edge) 
                return true;
        }
        return false;
    };
};
