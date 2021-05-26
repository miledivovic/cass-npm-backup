const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/MedicalGuideline
 * Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.
 *
 * @author schema.org
 * @class MedicalGuideline
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class MedicalGuideline extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalGuideline");
	}

	/**
	 * Schema.org/guidelineDate
	 * Date on which this guideline's recommendation was made.
	 *
	 * @property guidelineDate
	 * @type Date
	 */
	guidelineDate;

	/**
	 * Schema.org/evidenceLevel
	 * Strength of evidence of the data used to formulate the guideline (enumerated).
	 *
	 * @property evidenceLevel
	 * @type MedicalEvidenceLevel
	 */
	evidenceLevel;

	/**
	 * Schema.org/evidenceOrigin
	 * Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc.
	 *
	 * @property evidenceOrigin
	 * @type Text
	 */
	evidenceOrigin;

	/**
	 * Schema.org/guidelineSubject
	 * The medical conditions, treatments, etc. that are the subject of the guideline.
	 *
	 * @property guidelineSubject
	 * @type MedicalEntity
	 */
	guidelineSubject;

}