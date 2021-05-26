const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/MusicComposition
 * A musical composition.
 *
 * @author schema.org
 * @class MusicComposition
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class MusicComposition extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicComposition");
	}

	/**
	 * Schema.org/musicCompositionForm
	 * The type of composition (e.g. overture, sonata, symphony, etc.).
	 *
	 * @property musicCompositionForm
	 * @type Text
	 */
	musicCompositionForm;

	/**
	 * Schema.org/firstPerformance
	 * The date and place the work was first performed.
	 *
	 * @property firstPerformance
	 * @type Event
	 */
	firstPerformance;

	/**
	 * Schema.org/iswcCode
	 * The International Standard Musical Work Code for the composition.
	 *
	 * @property iswcCode
	 * @type Text
	 */
	iswcCode;

	/**
	 * Schema.org/lyrics
	 * The words in the song.
	 *
	 * @property lyrics
	 * @type CreativeWork
	 */
	lyrics;

	/**
	 * Schema.org/musicArrangement
	 * An arrangement derived from the composition.
	 *
	 * @property musicArrangement
	 * @type MusicComposition
	 */
	musicArrangement;

	/**
	 * Schema.org/recordedAs
	 * An audio recording of the work.
	 *
	 * @property recordedAs
	 * @type MusicRecording
	 */
	recordedAs;

	/**
	 * Schema.org/musicalKey
	 * The key, mode, or scale this composition uses.
	 *
	 * @property musicalKey
	 * @type Text
	 */
	musicalKey;

	/**
	 * Schema.org/includedComposition
	 * Smaller compositions included in this work (e.g. a movement in a symphony).
	 *
	 * @property includedComposition
	 * @type MusicComposition
	 */
	includedComposition;

	/**
	 * Schema.org/lyricist
	 * The person who wrote the words.
	 *
	 * @property lyricist
	 * @type Person
	 */
	lyricist;

	/**
	 * Schema.org/composer
	 * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
	 *
	 * @property composer
	 * @type Person
	 */
	composer;

}