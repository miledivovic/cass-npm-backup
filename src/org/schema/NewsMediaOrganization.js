const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/NewsMediaOrganization
 * A News/Media organization such as a newspaper or TV station.
 *
 * @author schema.org
 * @class NewsMediaOrganization
 * @module org.schema
 * @extends Organization
 */
module.exports = class NewsMediaOrganization extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NewsMediaOrganization");
	}

	/**
	 * Schema.org/diversityStaffingReport
	 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
	 *
	 * @property diversityStaffingReport
	 * @type URL
	 */
	diversityStaffingReport;

	/**
	 * Schema.org/correctionsPolicy
	 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
	 *
	 * @property correctionsPolicy
	 * @type URL
	 */
	correctionsPolicy;

	/**
	 * Schema.org/ownershipFundingInfo
	 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
	 *
	 * @property ownershipFundingInfo
	 * @type CreativeWork
	 */
	ownershipFundingInfo;

	/**
	 * Schema.org/verificationFactCheckingPolicy
	 * Disclosure about verification and fact-checking processes for a [[NewsMediaOrganization]] or other fact-checking [[Organization]].
	 *
	 * @property verificationFactCheckingPolicy
	 * @type URL
	 */
	verificationFactCheckingPolicy;

	/**
	 * Schema.org/masthead
	 * For a [[NewsMediaOrganization]], a link to the masthead page or a page listing top editorial management.
	 *
	 * @property masthead
	 * @type URL
	 */
	masthead;

	/**
	 * Schema.org/missionCoveragePrioritiesPolicy
	 * For a [[NewsMediaOrganization]], a statement on coverage priorities, including any public agenda or stance on issues.
	 *
	 * @property missionCoveragePrioritiesPolicy
	 * @type CreativeWork
	 */
	missionCoveragePrioritiesPolicy;

	/**
	 * Schema.org/unnamedSourcesPolicy
	 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
	 *
	 * @property unnamedSourcesPolicy
	 * @type URL
	 */
	unnamedSourcesPolicy;

	/**
	 * Schema.org/ethicsPolicy
	 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
	 *
	 * @property ethicsPolicy
	 * @type CreativeWork
	 */
	ethicsPolicy;

	/**
	 * Schema.org/actionableFeedbackPolicy
	 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
	 *
	 * @property actionableFeedbackPolicy
	 * @type CreativeWork
	 */
	actionableFeedbackPolicy;

	/**
	 * Schema.org/diversityPolicy
	 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
	 *
	 * @property diversityPolicy
	 * @type URL
	 */
	diversityPolicy;

	/**
	 * Schema.org/noBylinesPolicy
	 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement explaining when authors of articles are not named in bylines.
	 *
	 * @property noBylinesPolicy
	 * @type CreativeWork
	 */
	noBylinesPolicy;

}