/**
 *  Schema.org/ParcelService
 *  A private parcel service as the delivery mode available for a certain offer.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#DHL\n* http://purl.org/goodrelations/v1#FederalExpress\n* http://purl.org/goodrelations/v1#UPS
 * 
 *  @author schema.org
 *  @class ParcelService
 *  @module org.schema
 *  @extends DeliveryMethod
 */
var ParcelService = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    DeliveryMethod.call(this);
    this.context = "http://schema.org/";
    this.type = "ParcelService";
};
ParcelService = stjs.extend(ParcelService, DeliveryMethod, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
