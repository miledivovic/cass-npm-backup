
module.exports = class PartAsDesignedReference extends EcRemoteLinkedData {
partId;
uidRef;
uriRef;

 getPartId() {
        return partId;
    }

 setPartId( value) {
        this.partId = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "PartAsDesignedReference");
	}
};
