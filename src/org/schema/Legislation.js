const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Legislation
 * A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article).
 *
 * @author schema.org
 * @class Legislation
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Legislation extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Legislation");
	}

	/**
	 * Schema.org/legislationType
	 * The type of the legislation. Examples of values are "law", "act", "directive", "decree", "regulation", "statutory instrument", "loi organique", "règlement grand-ducal", etc., depending on the country.
	 *
	 * @property legislationType
	 * @type Text
	 */
	legislationType;

	/**
	 * Schema.org/legislationLegalForce
	 * Whether the legislation is currently in force, not in force, or partially in force.
	 *
	 * @property legislationLegalForce
	 * @type LegalForceStatus
	 */
	legislationLegalForce;

	/**
	 * Schema.org/legislationDate
	 * The date of adoption or signature of the legislation. This is the date at which the text is officially aknowledged to be a legislation, even though it might not even be published or in force.
	 *
	 * @property legislationDate
	 * @type Date
	 */
	legislationDate;

	/**
	 * Schema.org/legislationJurisdiction
	 * The jurisdiction from which the legislation originates.
	 *
	 * @property legislationJurisdiction
	 * @type Text
	 */
	legislationJurisdiction;

	/**
	 * Schema.org/legislationConsolidates
	 * Indicates another legislation taken into account in this consolidated legislation (which is usually the product of an editorial process that revises the legislation). This property should be used multiple times to refer to both the original version or the previous consolidated version, and to the legislations making the change.
	 *
	 * @property legislationConsolidates
	 * @type Legislation
	 */
	legislationConsolidates;

	/**
	 * Schema.org/legislationResponsible
	 * An individual or organization that has some kind of responsibility for the legislation. Typically the ministry who is/was in charge of elaborating the legislation, or the adressee for potential questions about the legislation once it is published.
	 *
	 * @property legislationResponsible
	 * @type Person
	 */
	legislationResponsible;

	/**
	 * Schema.org/legislationChanges
	 * Another legislation that this legislation changes. This encompasses the notions of amendment, replacement, correction, repeal, or other types of change. This may be a direct change (textual or non-textual amendment) or a consequential or indirect change. The property is to be used to express the existence of a change relationship between two acts rather than the existence of a consolidated version of the text that shows the result of the change. For consolidation relationships, use the <a href="/legislationConsolidates">legislationConsolidates</a> property.
	 *
	 * @property legislationChanges
	 * @type Legislation
	 */
	legislationChanges;

	/**
	 * Schema.org/legislationPassedBy
	 * The person or organization that originally passed or made the law : typically parliament (for primary legislation) or government (for secondary legislation). This indicates the "legal author" of the law, as opposed to its physical author.
	 *
	 * @property legislationPassedBy
	 * @type Organization
	 */
	legislationPassedBy;

	/**
	 * Schema.org/jurisdiction
	 * Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based.
	 *
	 * @property jurisdiction
	 * @type AdministrativeArea
	 */
	jurisdiction;

	/**
	 * Schema.org/legislationDateVersion
	 * The point-in-time at which the provided description of the legislation is valid (e.g. : when looking at the law on the 2016-04-07 (= dateVersion), I get the consolidation of 2015-04-12 of the "National Insurance Contributions Act 2015")
	 *
	 * @property legislationDateVersion
	 * @type Date
	 */
	legislationDateVersion;

	/**
	 * Schema.org/legislationIdentifier
	 * An identifier for the legislation. This can be either a string-based identifier, like the CELEX at EU level or the NOR in France, or a web-based, URL/URI identifier, like an ELI (European Legislation Identifier) or an URN-Lex.
	 *
	 * @property legislationIdentifier
	 * @type URL
	 */
	legislationIdentifier;

	/**
	 * Schema.org/legislationApplies
	 * Indicates that this legislation (or part of a legislation) somehow transfers another legislation in a different legislative context. This is an informative link, and it has no legal value. For legally-binding links of transposition, use the <a href="/legislationTransposes">legislationTransposes</a> property. For example an informative consolidated law of a European Union's member state "applies" the consolidated version of the European Directive implemented in it.
	 *
	 * @property legislationApplies
	 * @type Legislation
	 */
	legislationApplies;

	/**
	 * Schema.org/legislationTransposes
	 * Indicates that this legislation (or part of legislation) fulfills the objectives set by another legislation, by passing appropriate implementation measures. Typically, some legislations of European Union's member states or regions transpose European Directives. This indicates a legally binding link between the 2 legislations.
	 *
	 * @property legislationTransposes
	 * @type Legislation
	 */
	legislationTransposes;

}