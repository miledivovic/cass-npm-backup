/**
 * credentialengine.org/Agent
 * Organization or person that acts or has the power to act.
 * Broad type that includes both organizations and people who play roles in the lifecycle of a resource.
 * @author credentialengine.org
 * @class Agent
 * @module org.credentialengine
 */
module.exports = class Agent extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super("http://schema.eduworks.com/simpleCtdl", "Agent");
	}
};
