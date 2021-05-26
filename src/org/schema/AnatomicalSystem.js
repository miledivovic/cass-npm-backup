const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/AnatomicalSystem
 * An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can includes circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.
 *
 * @author schema.org
 * @class AnatomicalSystem
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class AnatomicalSystem extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AnatomicalSystem");
	}

	/**
	 * Schema.org/associatedPathophysiology
	 * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
	 *
	 * @property associatedPathophysiology
	 * @type Text
	 */
	associatedPathophysiology;

	/**
	 * Schema.org/relatedTherapy
	 * A medical therapy related to this anatomy.
	 *
	 * @property relatedTherapy
	 * @type MedicalTherapy
	 */
	relatedTherapy;

	/**
	 * Schema.org/relatedCondition
	 * A medical condition associated with this anatomy.
	 *
	 * @property relatedCondition
	 * @type MedicalCondition
	 */
	relatedCondition;

	/**
	 * Schema.org/relatedStructure
	 * Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system.
	 *
	 * @property relatedStructure
	 * @type AnatomicalStructure
	 */
	relatedStructure;

	/**
	 * Schema.org/comprisedOf
	 * Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system.
	 *
	 * @property comprisedOf
	 * @type AnatomicalStructure
	 */
	comprisedOf;

}