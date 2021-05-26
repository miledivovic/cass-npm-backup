const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Dataset
 * A body of structured information describing some topic(s) of interest.
 *
 * @author schema.org
 * @class Dataset
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Dataset extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Dataset");
	}

	/**
	 * Schema.org/datasetTimeInterval
	 * The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).
	 *
	 * @property datasetTimeInterval
	 * @type DateTime
	 */
	datasetTimeInterval;

	/**
	 * Schema.org/includedInDataCatalog
	 * A data catalog which contains this dataset.
	 *
	 * @property includedInDataCatalog
	 * @type DataCatalog
	 */
	includedInDataCatalog;

	/**
	 * Schema.org/variableMeasured
	 * The variableMeasured property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue.
	 *
	 * @property variableMeasured
	 * @type Text
	 */
	variableMeasured;

	/**
	 * Schema.org/issn
	 * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
	 *
	 * @property issn
	 * @type Text
	 */
	issn;

	/**
	 * Schema.org/measurementTechnique
	 * A technique or technology used in a [[Dataset]] (or [[DataDownload]], [[DataCatalog]]),
corresponding to the method used for measuring the corresponding variable(s) (described using [[variableMeasured]]). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.

For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".

If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".

If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]].
      
	 *
	 * @property measurementTechnique
	 * @type URL
	 */
	measurementTechnique;

	/**
	 * Schema.org/distribution
	 * A downloadable form of this dataset, at a specific location, in a specific format.
	 *
	 * @property distribution
	 * @type DataDownload
	 */
	distribution;

	/**
	 * Schema.org/variablesMeasured
	 * Originally named [[variablesMeasured]], The [[variableMeasured]] property can indicate (repeated as necessary) the  variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue.
	 *
	 * @property variablesMeasured
	 * @type Text
	 */
	variablesMeasured;

	/**
	 * Schema.org/includedDataCatalog
	 * A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').
	 *
	 * @property includedDataCatalog
	 * @type DataCatalog
	 */
	includedDataCatalog;

	/**
	 * Schema.org/catalog
	 * A data catalog which contains this dataset.
	 *
	 * @property catalog
	 * @type DataCatalog
	 */
	catalog;

}