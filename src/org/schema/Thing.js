/**
 *  Schema.org/Thing
 *  The most generic type of item.
 * 
 *  @author schema.org
 *  @class Thing
 *  @module org.schema
 */
var Thing = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    EcRemoteLinkedData.call(this, "http://schema.org/", "Thing");
};
Thing = stjs.extend(Thing, EcRemoteLinkedData, [], function(constructor, prototype) {
    /**
     *  Schema.org/name
     *  The name of the item.
     * 
     *  @property name
     *  @type Text
     */
    name = null;
    /**
     *  Schema.org/identifier
     *  The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
     * 
     *  @property identifier
     *  @type schema, URL | schema,Text | schema,PropertyValue
     */
    identifier = null;
    /**
     *  Schema.org/url
     *  URL of the item.
     * 
     *  @property url
     *  @type URL
     */
    url = null;
    /**
     *  Schema.org/image
     *  An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
     * 
     *  @property image
     *  @type schema, URL | schema,ImageObject
     */
    image = null;
    /**
     *  Schema.org/description
     *  A description of the item.
     * 
     *  @property description
     *  @type Text
     */
    description = null;
    /**
     *  Schema.org/disambiguatingDescription
     *  A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     * 
     *  @property disambiguatingDescription
     *  @type Text
     */
    disambiguatingDescription = null;
    /**
     *  Schema.org/alternateName
     *  An alias for the item.
     * 
     *  @property alternateName
     *  @type Text
     */
    alternateName = null;
    /**
     *  Schema.org/sameAs
     *  URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
     * 
     *  @property sameAs
     *  @type URL
     */
    sameAs = null;
    /**
     *  Schema.org/additionalType
     *  An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
     * 
     *  @property additionalType
     *  @type URL
     */
    additionalType = null;
    /**
     *  Schema.org/potentialAction
     *  Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     * 
     *  @property potentialAction
     *  @type Action
     */
    potentialAction = null;
    /**
     *  Schema.org/mainEntityOfPage
     *  Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     * 
     *  @property mainEntityOfPage
     *  @type schema, URL | schema,CreativeWork
     */
    mainEntityOfPage = null;

}, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
