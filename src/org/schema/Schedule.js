const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Schedule
 * A schedule defines a repeating time period used to describe a regularly occurring [[Event]]. At a minimum a schedule will specify [[repeatFrequency]] which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely.
      This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also
      have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.
 *
 * @author schema.org
 * @class Schedule
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Schedule extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Schedule");
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
	 * Schema.org/startDate
	 * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
	 *
	 * @property startDate
	 * @type Date
	 */
	startDate;

	/**
	 * Schema.org/endTime
	 * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
	 *
	 * @property endTime
	 * @type DateTime
	 */
	endTime;

	/**
	 * Schema.org/repeatFrequency
	 * Defines the frequency at which [[Event]]s will occur according to a schedule [[Schedule]]. The intervals between
      events should be defined as a [[Duration]] of time.
	 *
	 * @property repeatFrequency
	 * @type Text
	 */
	repeatFrequency;

	/**
	 * Schema.org/exceptDate
	 * Defines a [[Date]] or [[DateTime]] during which a scheduled [[Event]] will not take place. The property allows exceptions to
      a [[Schedule]] to be specified. If an exception is specified as a [[DateTime]] then only the event that would have started at that specific date and time
      should be excluded from the schedule. If an exception is specified as a [[Date]] then any event that is scheduled for that 24 hour period should be
      excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event.
	 *
	 * @property exceptDate
	 * @type Date
	 */
	exceptDate;

	/**
	 * Schema.org/byMonth
	 * Defines the month(s) of the year on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-12. January is 1.
	 *
	 * @property byMonth
	 * @type Integer
	 */
	byMonth;

	/**
	 * Schema.org/endDate
	 * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
	 *
	 * @property endDate
	 * @type Date
	 */
	endDate;

	/**
	 * Schema.org/byMonthDay
	 * Defines the day(s) of the month on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-31.
	 *
	 * @property byMonthDay
	 * @type Integer
	 */
	byMonthDay;

	/**
	 * Schema.org/byDay
	 * Defines the day(s) of the week on which a recurring [[Event]] takes place. May be specified using either [[DayOfWeek]], or alternatively [[Text]] conforming to iCal's syntax for byDay recurrence rules.
	 *
	 * @property byDay
	 * @type Text
	 */
	byDay;

	/**
	 * Schema.org/scheduleTimezone
	 * Indicates the timezone for which the time(s) indicated in the [[Schedule]] are given. The value provided should be among those listed in the IANA Time Zone Database.
	 *
	 * @property scheduleTimezone
	 * @type Text
	 */
	scheduleTimezone;

	/**
	 * Schema.org/repeatCount
	 * Defines the number of times a recurring [[Event]] will take place
	 *
	 * @property repeatCount
	 * @type Integer
	 */
	repeatCount;

	/**
	 * Schema.org/duration
	 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property duration
	 * @type Duration
	 */
	duration;

	/**
	 * Schema.org/byMonthWeek
	 * Defines the week(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-5. For clarity, byMonthWeek is best used in conjunction with byDay to indicate concepts like the first and third Mondays of a month.
	 *
	 * @property byMonthWeek
	 * @type Integer
	 */
	byMonthWeek;

}