const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/LearningResource
 * The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.

[[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.

[[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.
 *
 * @author schema.org
 * @class LearningResource
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class LearningResource extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LearningResource");
	}

	/**
	 * Schema.org/educationalLevel
	 * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
	 *
	 * @property educationalLevel
	 * @type Text
	 */
	educationalLevel;

	/**
	 * Schema.org/competencyRequired
	 * Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.
	 *
	 * @property competencyRequired
	 * @type Text
	 */
	competencyRequired;

	/**
	 * Schema.org/educationalUse
	 * The purpose of a work in the context of education; for example, 'assignment', 'group work'.
	 *
	 * @property educationalUse
	 * @type DefinedTerm
	 */
	educationalUse;

	/**
	 * Schema.org/educationalAlignment
	 * An alignment to an established educational framework.

This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
	 *
	 * @property educationalAlignment
	 * @type AlignmentObject
	 */
	educationalAlignment;

	/**
	 * Schema.org/learningResourceType
	 * The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
	 *
	 * @property learningResourceType
	 * @type Text
	 */
	learningResourceType;

	/**
	 * Schema.org/teaches
	 * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
	 *
	 * @property teaches
	 * @type Text
	 */
	teaches;

	/**
	 * Schema.org/assesses
	 * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
	 *
	 * @property assesses
	 * @type Text
	 */
	assesses;

}