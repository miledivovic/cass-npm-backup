const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/ServiceChannel
 * A means for accessing a service, e.g. a government office location, web site, or phone number.
 *
 * @author schema.org
 * @class ServiceChannel
 * @module org.schema
 * @extends Intangible
 */
module.exports = class ServiceChannel extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ServiceChannel");
	}

	/**
	 * Schema.org/providesService
	 * The service provided by this channel.
	 *
	 * @property providesService
	 * @type Service
	 */
	providesService;

	/**
	 * Schema.org/servicePhone
	 * The phone number to use to access the service.
	 *
	 * @property servicePhone
	 * @type ContactPoint
	 */
	servicePhone;

	/**
	 * Schema.org/availableLanguage
	 * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
	 *
	 * @property availableLanguage
	 * @type Text
	 */
	availableLanguage;

	/**
	 * Schema.org/serviceSmsNumber
	 * The number to access the service by text message.
	 *
	 * @property serviceSmsNumber
	 * @type ContactPoint
	 */
	serviceSmsNumber;

	/**
	 * Schema.org/serviceUrl
	 * The website to access the service.
	 *
	 * @property serviceUrl
	 * @type URL
	 */
	serviceUrl;

	/**
	 * Schema.org/serviceLocation
	 * The location (e.g. civic structure, local business, etc.) where a person can go to access the service.
	 *
	 * @property serviceLocation
	 * @type Place
	 */
	serviceLocation;

	/**
	 * Schema.org/servicePostalAddress
	 * The address for accessing the service by mail.
	 *
	 * @property servicePostalAddress
	 * @type PostalAddress
	 */
	servicePostalAddress;

	/**
	 * Schema.org/processingTime
	 * Estimated processing time for the service using this channel.
	 *
	 * @property processingTime
	 * @type Duration
	 */
	processingTime;

}