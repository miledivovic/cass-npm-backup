/**
 * asn:ProgressionModel
 * Model of identifiable points along a developmental progression including increasing levels of competence, achievement or temporal position (e.g., "Second Quarter").
 * @author credentialengine.org
 * @class ProgressionModel
 * @module org.credentialengine
 */
module.exports = class ProgressionModel extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 * @constructor
	 */
	constructor() {
		super("http://schema.eduworks.com/simpleCtdl", "ProgressionModel");
	}
};
