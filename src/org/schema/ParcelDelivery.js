/**
 *  Schema.org/ParcelDelivery
 *  The delivery of a parcel either via the postal service or a commercial service.
 * 
 *  @author schema.org
 *  @class ParcelDelivery
 *  @module org.schema
 *  @extends Intangible
 */
var ParcelDelivery = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Intangible.call(this);
    this.context = "http://schema.org/";
    this.type = "ParcelDelivery";
};
ParcelDelivery = stjs.extend(ParcelDelivery, Intangible, [], function(constructor, prototype) {
    /**
     *  Schema.org/provider
     *  The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     * 
     *  @property provider
     *  @type Person
     */
    provider = null;
    /**
     *  Schema.org/trackingUrl
     *  Tracking url for the parcel delivery.
     * 
     *  @property trackingUrl
     *  @type URL
     */
    trackingUrl = null;
    /**
     *  Schema.org/deliveryAddress
     *  Destination address.
     * 
     *  @property deliveryAddress
     *  @type PostalAddress
     */
    deliveryAddress = null;
    /**
     *  Schema.org/trackingNumber
     *  Shipper tracking number.
     * 
     *  @property trackingNumber
     *  @type Text
     */
    trackingNumber = null;
    /**
     *  Schema.org/hasDeliveryMethod
     *  Method used for delivery or shipping.
     * 
     *  @property hasDeliveryMethod
     *  @type DeliveryMethod
     */
    hasDeliveryMethod = null;
    /**
     *  Schema.org/deliveryStatus
     *  New entry added as the package passes through each leg of its journey (from shipment to final delivery).
     * 
     *  @property deliveryStatus
     *  @type DeliveryEvent
     */
    deliveryStatus = null;
    /**
     *  Schema.org/carrier
     *  'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
     * 
     *  @property carrier
     *  @type Organization
     */
    carrier = null;
    /**
     *  Schema.org/originAddress
     *  Shipper's address.
     * 
     *  @property originAddress
     *  @type PostalAddress
     */
    originAddress = null;
    /**
     *  Schema.org/itemShipped
     *  Item(s) being shipped.
     * 
     *  @property itemShipped
     *  @type Product
     */
    itemShipped = null;
    /**
     *  Schema.org/partOfOrder
     *  The overall order the items in this delivery were included in.
     * 
     *  @property partOfOrder
     *  @type Order
     */
    partOfOrder = null;
    /**
     *  Schema.org/expectedArrivalFrom
     *  The earliest date the package may arrive.
     * 
     *  @property expectedArrivalFrom
     *  @type DateTime
     */
    expectedArrivalFrom = null;
    /**
     *  Schema.org/expectedArrivalUntil
     *  The latest date the package may arrive.
     * 
     *  @property expectedArrivalUntil
     *  @type DateTime
     */
    expectedArrivalUntil = null;
}, {provider: "Person", deliveryAddress: "PostalAddress", hasDeliveryMethod: "DeliveryMethod", deliveryStatus: "DeliveryEvent", carrier: "Organization", originAddress: "PostalAddress", itemShipped: "Product", partOfOrder: "Order", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
