const schema = {};
schema.Episode = require("./Episode.js");
/**
 * Schema.org/TVEpisode
 * A TV episode which can be part of a series or season.
 *
 * @author schema.org
 * @class TVEpisode
 * @module org.schema
 * @extends Episode
 */
module.exports = class TVEpisode extends schema.Episode {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TVEpisode");
	}

	/**
	 * Schema.org/subtitleLanguage
	 * Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47).
	 *
	 * @property subtitleLanguage
	 * @type Text
	 */
	subtitleLanguage;

	/**
	 * Schema.org/titleEIDR
	 * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing at the most general/abstract level, a work of film or television.

For example, the motion picture known as "Ghostbusters" has a titleEIDR of  "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See [[editEIDR]].

Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.

	 *
	 * @property titleEIDR
	 * @type Text
	 */
	titleEIDR;

	/**
	 * Schema.org/countryOfOrigin
	 * The country of the principal offices of the production company or individual responsible for the movie or program.
	 *
	 * @property countryOfOrigin
	 * @type Country
	 */
	countryOfOrigin;

	/**
	 * Schema.org/partOfTVSeries
	 * The TV series to which this episode or season belongs.
	 *
	 * @property partOfTVSeries
	 * @type TVSeries
	 */
	partOfTVSeries;

}