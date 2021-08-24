
module.exports = class LearningObjectiveRef extends EcRemoteLinkedData {
loId;
uidRef;
uriRef;

 getLoId() {
        return loId;
    }

 setLoId( value) {
        this.loId = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "LearningObjectiveRef");
	}
};
