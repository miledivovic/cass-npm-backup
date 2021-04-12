/**
 * Schema.org/CDCPMDRecord
 * A CDCPMDRecord is a data structure representing a record in a CDC tabular data format
      used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative
      definitions used as the source here.
      
 *
 * @author schema.org
 * @class CDCPMDRecord
 * @module org.schema
 */
public class CDCPMDRecord extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "CDCPMDRecord";
	}

}