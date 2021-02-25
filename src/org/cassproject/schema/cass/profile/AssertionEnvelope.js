/**
 *  Container for storing assertions and the secrets used to decrypt those assertions.
 * 
 *  @author fritz.ray@eduworks.com
 *  @class AssertionEnvelope
 *  @extends CreativeWork
 *  @module org.cassproject
 */
var AssertionEnvelope = function() {
    CreativeWork.call(this);
    this.setContextAndType(Cass.context, AssertionEnvelope.myType);
};
AssertionEnvelope = stjs.extend(AssertionEnvelope, CreativeWork, [], function(constructor, prototype) {
    constructor.TYPE_0_5 = "http://schema.cassproject.org/0.4/AssertionEnvelope";
    constructor.TYPE_0_6 = "https://schema.cassproject.org/0.4/AssertionEnvelope";
    constructor.myType = AssertionEnvelope.TYPE_0_6;
    /**
     *  List of assertions to pack in the envelope.
     * 
     *  @property assertion
     *  @type Assertion[]
     */
    prototype.assertion = null;
    /**
     *  List of secrets found in assertions to the objects necessary to decrypt the assertion data.
     * 
     *  @property codebook
     *  @type AssertionCodebook[]
     */
    prototype.codebook = null;
    prototype.length = function() {
        if (this.assertion != null) 
            return this.assertion.length;
        return 0;
    };
    /**
     *  Removes an assertion from the envelope
     *  @param assertionShortIdToRemove
     *  @method removeAssertionByShortId
     */
    prototype.removeAssertionByShortId = function(assertionShortIdToRemove) {
        if (this.assertion != null) {
            for (var i = 0; i < this.assertion.length; i++) {
                if (this.getAssertion(i).shortId().equals(assertionShortIdToRemove)) {
                    this.assertion.splice(i, 1);
                    break;
                }
            }
        }
        if (this.codebook != null) {
            for (var i = 0; i < this.codebook.length; i++) {
                if (this.codebook[i].assertionShortId.equals(assertionShortIdToRemove)) {
                    this.codebook.splice(i, 1);
                    break;
                }
            }
        }
    };
    /**
     *  Returns the assertion indexed at position @index.
     *  @param index
     *  @method getAssertion
     *  @return
     */
    prototype.getAssertion = function(index) {
        if (this.assertion != null) 
            if (index < this.assertion.length) {
                if (Assertion.codebooks == null) 
                    Assertion.codebooks = new Object();
                var a = new Assertion();
                a.copyFrom(this.assertion[index]);
                (Assertion.codebooks)[a.id] = this.codebook[index];
                return a;
            }
        return null;
    };
    /**
     *  Adds the assertion to the envelope and adds the keys necessary to decode the assertion to the envelope.
     *  @param a Assertion to add.
     *  @method addAssertion
     */
    prototype.addAssertion = function(a) {
        var me = this;
        var ac = new AssertionCodebook();
        if (this.assertion == null) 
            this.assertion = new Array();
        this.assertion.push(a);
        if (this.codebook == null) 
            this.codebook = new Array();
        this.codebook.push(ac);
        if (a.shortId() != null) 
            ac.assertionShortId = a.shortId();
        if (a.agent != null) 
            ac.agent = a.agent.decryptSecret();
        if (a.subject != null) 
            ac.subject = a.subject.decryptSecret();
        if (a.assertionDate != null) 
            ac.assertionDate = a.assertionDate.decryptSecret();
        if (a.expirationDate != null) 
            ac.expirationDate = a.expirationDate.decryptSecret();
        if (a.decayFunction != null) 
            ac.decayFunction = a.decayFunction.decryptSecret();
        if (a.negative != null) 
            ac.negative = a.negative.decryptSecret();
        if (a.evidence != null) 
            for (var i = 0; i < a.evidence.length; i++) {
                if (ac.evidence == null) 
                    ac.evidence = new Array();
                var ecEncryptedValue = a.evidence[i];
                ac.evidence.push(ecEncryptedValue.decryptSecret());
            }
    };
    /**
     *  Adds the assertion to the envelope and adds the keys necessary to decode the assertion to the envelope.
     *  @param a Assertion to add.
     *  @param success Event to call when success occurs.
     *  @param failure Event to call when failure occurs.
     *  @method addAssertionAsync
     */
    prototype.addAssertionAsync = function(a, success, failure) {
        var me = this;
        var ac = new AssertionCodebook();
        if (this.assertion == null) 
            this.assertion = new Array();
        this.assertion.push(a);
        if (this.codebook == null) 
            this.codebook = new Array();
        this.codebook.push(ac);
        var thingsToRun = new Array();
        var eah = new EcAsyncHelper();
        if (a.agent != null) 
            thingsToRun.push(function(finished) {
                a.agent.decryptSecretAsync(function(secret) {
                    ac.agent = secret;
                    finished();
                }, failure);
            });
        if (a.subject != null) 
            thingsToRun.push(function(finished) {
                a.subject.decryptSecretAsync(function(secret) {
                    ac.subject = secret;
                    finished();
                }, failure);
            });
        if (a.assertionDate != null) 
            thingsToRun.push(function(finished) {
                a.assertionDate.decryptSecretAsync(function(secret) {
                    ac.assertionDate = secret;
                    finished();
                }, failure);
            });
        if (a.expirationDate != null) 
            thingsToRun.push(function(finished) {
                a.expirationDate.decryptSecretAsync(function(secret) {
                    ac.expirationDate = secret;
                    finished();
                }, failure);
            });
        if (a.decayFunction != null) 
            thingsToRun.push(function(finished) {
                a.decayFunction.decryptSecretAsync(function(secret) {
                    ac.decayFunction = secret;
                    finished();
                }, failure);
            });
        if (a.negative != null) 
            thingsToRun.push(function(finished) {
                a.negative.decryptSecretAsync(function(secret) {
                    ac.negative = secret;
                    finished();
                }, failure);
            });
        if (a.evidence != null) 
            thingsToRun.push(function(finished) {
                var eah = new EcAsyncHelper();
                eah.each(a.evidence, function(ecEncryptedValue, callback0) {
                    ecEncryptedValue.decryptSecretAsync(function(ebacEncryptedSecret) {
                        if (ebacEncryptedSecret != null) {
                            if (ac.evidence == null) 
                                ac.evidence = new Array();
                            ac.evidence.push(ebacEncryptedSecret);
                        }
                        callback0();
                    }, failure);
                }, function(strings) {
                    finished();
                });
            });
        eah.each(thingsToRun, function(theThingToDo, callback0) {
            theThingToDo(callback0);
        }, function(strings) {
            success();
        });
    };
    /**
     *  Validates that all assertions have not been tampered with (are authentic).
     *  Does not validate the sources of assertions.
     *  @return True IFF assertions are authentic.
     *  @method validate
     */
    prototype.validate = function() {
        if (this.assertion != null) 
            for (var i = 0; i < this.assertion.length; i++) 
                if (this.assertion[i].invalid()) 
                    return false;
        return true;
    };
}, {assertion: {name: "Array", arguments: ["Assertion"]}, codebook: {name: "Array", arguments: ["AssertionCodebook"]}, about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
