/**
 *  Schema.org/PaymentStatusType
 *  A specific payment status. For example, PaymentDue, PaymentComplete, etc.
 * 
 *  @author schema.org
 *  @class PaymentStatusType
 *  @module org.schema
 *  @extends Enumeration
 */
var PaymentStatusType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "PaymentStatusType";
};
PaymentStatusType = stjs.extend(PaymentStatusType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
