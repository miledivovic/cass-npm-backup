const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/ContactPoint
 * A contact point&#x2014;for example, a Customer Complaints department.
 *
 * @author schema.org
 * @class ContactPoint
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class ContactPoint extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ContactPoint");
	}

	/**
	 * Schema.org/availableLanguage
	 * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
	 *
	 * @property availableLanguage
	 * @type Text
	 */
	availableLanguage;

	/**
	 * Schema.org/areaServed
	 * The geographic area where a service or offered item is provided.
	 *
	 * @property areaServed
	 * @type Place
	 */
	areaServed;

	/**
	 * Schema.org/productSupported
	 * The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").
	 *
	 * @property productSupported
	 * @type Text
	 */
	productSupported;

	/**
	 * Schema.org/email
	 * Email address.
	 *
	 * @property email
	 * @type Text
	 */
	email;

	/**
	 * Schema.org/telephone
	 * The telephone number.
	 *
	 * @property telephone
	 * @type Text
	 */
	telephone;

	/**
	 * Schema.org/contactType
	 * A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.
	 *
	 * @property contactType
	 * @type Text
	 */
	contactType;

	/**
	 * Schema.org/hoursAvailable
	 * The hours during which this service or contact is available.
	 *
	 * @property hoursAvailable
	 * @type OpeningHoursSpecification
	 */
	hoursAvailable;

	/**
	 * Schema.org/serviceArea
	 * The geographic area where the service is provided.
	 *
	 * @property serviceArea
	 * @type GeoShape
	 */
	serviceArea;

	/**
	 * Schema.org/faxNumber
	 * The fax number.
	 *
	 * @property faxNumber
	 * @type Text
	 */
	faxNumber;

	/**
	 * Schema.org/contactOption
	 * An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).
	 *
	 * @property contactOption
	 * @type ContactPointOption
	 */
	contactOption;

}