/**
 *  Schema.org/WarrantyPromise
 *  A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 * 
 *  @author schema.org
 *  @class WarrantyPromise
 *  @module org.schema
 *  @extends StructuredValue
 */
var WarrantyPromise = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    StructuredValue.call(this);
    this.context = "http://schema.org/";
    this.type = "WarrantyPromise";
};
WarrantyPromise = stjs.extend(WarrantyPromise, StructuredValue, [], function(constructor, prototype) {
    /**
     *  Schema.org/durationOfWarranty
     *  The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.
     * 
     *  @property durationOfWarranty
     *  @type QuantitativeValue
     */
    prototype.durationOfWarranty = null;
    /**
     *  Schema.org/warrantyScope
     *  The scope of the warranty promise.
     * 
     *  @property warrantyScope
     *  @type WarrantyScope
     */
    prototype.warrantyScope = null;
}, {durationOfWarranty: "QuantitativeValue", warrantyScope: "WarrantyScope", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
