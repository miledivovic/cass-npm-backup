
module.exports = class CompetencyDefinitionRef extends EcRemoteLinkedData {
compId;
uidRef;
uriRef;

 getCompId() {
        return compId;
    }

 setCompId( value) {
        this.compId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

 getUriRef() {
        return uriRef;
    }

 setUriRef( value) {
        this.uriRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "CompetencyDefinitionRef");
	}
};
