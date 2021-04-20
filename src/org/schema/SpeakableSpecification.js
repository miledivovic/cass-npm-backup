/**
 * Schema.org/SpeakableSpecification
 * A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highlighted as particularly [[speakable]]. Instances of this type are expected to be used primarily as values of the [[speakable]] property.
 *
 * @author schema.org
 * @class SpeakableSpecification
 * @module org.schema
 */
module.exports = class SpeakableSpecification extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SpeakableSpecification");
	}

}