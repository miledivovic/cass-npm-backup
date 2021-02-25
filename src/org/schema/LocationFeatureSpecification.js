/**
 *  Schema.org/LocationFeatureSpecification
 *  Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.
 * 
 *  @author schema.org
 *  @class LocationFeatureSpecification
 *  @module org.schema
 *  @extends PropertyValue
 */
var LocationFeatureSpecification = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PropertyValue.call(this);
    this.context = "http://schema.org/";
    this.type = "LocationFeatureSpecification";
};
LocationFeatureSpecification = stjs.extend(LocationFeatureSpecification, PropertyValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/hoursAvailable
     *  The hours during which this service or contact is available.
     * 
     *  @property hoursAvailable
     *  @type OpeningHoursSpecification
     */
    prototype.hoursAvailable = null;
    /**
     *  Schema.org/validFrom
     *  The date when the item becomes valid.
     * 
     *  @property validFrom
     *  @type DateTime
     */
    prototype.validFrom = null;
    /**
     *  Schema.org/validThrough
     *  The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     * 
     *  @property validThrough
     *  @type DateTime
     */
    prototype.validThrough = null;
}, {hoursAvailable: "OpeningHoursSpecification", value: "StructuredValue", valueReference: "StructuredValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
