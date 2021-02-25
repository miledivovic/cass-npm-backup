/**
 *  Schema.org/DayOfWeek
 *  The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.
 *  <p>
 *  Originally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.
 * 
 *  @author schema.org
 *  @class DayOfWeek
 *  @module org.schema
 *  @extends Enumeration
 */
var DayOfWeek = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "DayOfWeek";
};
DayOfWeek = stjs.extend(DayOfWeek, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
