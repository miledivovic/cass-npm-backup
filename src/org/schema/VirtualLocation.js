/**
 * Schema.org/VirtualLocation
 * An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world.
 *
 * @author schema.org
 * @class VirtualLocation
 * @module org.schema
 */
module.exports = class VirtualLocation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VirtualLocation");
	}

}