const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/MediaObject
 * A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
 *
 * @author schema.org
 * @class MediaObject
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class MediaObject extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MediaObject");
	}

	/**
	 * Schema.org/startTime
	 * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
	 *
	 * @property startTime
	 * @type DateTime
	 */
	startTime;

	/**
	 * Schema.org/bitrate
	 * The bitrate of the media object.
	 *
	 * @property bitrate
	 * @type Text
	 */
	bitrate;

	/**
	 * Schema.org/height
	 * The height of the item.
	 *
	 * @property height
	 * @type Distance
	 */
	height;

	/**
	 * Schema.org/playerType
	 * Player type required&#x2014;for example, Flash or Silverlight.
	 *
	 * @property playerType
	 * @type Text
	 */
	playerType;

	/**
	 * Schema.org/embedUrl
	 * A URL pointing to a player for a specific video. In general, this is the information in the ```src``` element of an ```embed``` tag and should not be the same as the content of the ```loc``` tag.
	 *
	 * @property embedUrl
	 * @type URL
	 */
	embedUrl;

	/**
	 * Schema.org/width
	 * The width of the item.
	 *
	 * @property width
	 * @type QuantitativeValue
	 */
	width;

	/**
	 * Schema.org/encodesCreativeWork
	 * The CreativeWork encoded by this media object.
	 *
	 * @property encodesCreativeWork
	 * @type CreativeWork
	 */
	encodesCreativeWork;

	/**
	 * Schema.org/regionsAllowed
	 * The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166).
	 *
	 * @property regionsAllowed
	 * @type Place
	 */
	regionsAllowed;

	/**
	 * Schema.org/endTime
	 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
	 *
	 * @property endTime
	 * @type DateTime
	 */
	endTime;

	/**
	 * Schema.org/ineligibleRegion
	 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
      
	 *
	 * @property ineligibleRegion
	 * @type GeoShape
	 */
	ineligibleRegion;

	/**
	 * Schema.org/uploadDate
	 * Date when this media object was uploaded to this site.
	 *
	 * @property uploadDate
	 * @type Date
	 */
	uploadDate;

	/**
	 * Schema.org/contentUrl
	 * Actual bytes of the media object, for example the image file or video file.
	 *
	 * @property contentUrl
	 * @type URL
	 */
	contentUrl;

	/**
	 * Schema.org/contentSize
	 * File size in (mega/kilo) bytes.
	 *
	 * @property contentSize
	 * @type Text
	 */
	contentSize;

	/**
	 * Schema.org/encodingFormat
	 * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).

In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.

Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
	 *
	 * @property encodingFormat
	 * @type URL
	 */
	encodingFormat;

	/**
	 * Schema.org/productionCompany
	 * The production company or studio responsible for the item e.g. series, video game, episode etc.
	 *
	 * @property productionCompany
	 * @type Organization
	 */
	productionCompany;

	/**
	 * Schema.org/associatedArticle
	 * A NewsArticle associated with the Media Object.
	 *
	 * @property associatedArticle
	 * @type NewsArticle
	 */
	associatedArticle;

	/**
	 * Schema.org/duration
	 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property duration
	 * @type Duration
	 */
	duration;

	/**
	 * Schema.org/requiresSubscription
	 * Indicates if use of the media require a subscription  (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').
	 *
	 * @property requiresSubscription
	 * @type Boolean
	 */
	requiresSubscription;

}