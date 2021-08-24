
module.exports = class BreakdownElementReference extends EcRemoteLinkedData {
beId;
uidRef;
uriRef;

 getBeId() {
        return beId;
    }

 setBeId( value) {
        this.beId = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementReference");
	}
};
