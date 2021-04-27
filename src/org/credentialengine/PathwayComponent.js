/**
 * credentialengine.org/PathwayComponent
 * Resource that serves as a defined point along the route of a Pathway which describes an objective and its completion requirements through reference to one or more instances of ComponentCondition.
 * An instance of PathwayComponent may serve as the goal or destination node of a Pathway.
 * @author credentialengine.org
 * @class PathwayComponent
 * @module org.credentialengine
 */
module.exports = class PathwayComponent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super("http://schema.eduworks.com/simpleCtdl", "PathwayComponent");
	}
};
