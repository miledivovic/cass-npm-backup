
module.exports = class OperatingLocationTypeReference extends EcRemoteLinkedData {
opTypeId;
uidRef;

 getOpTypeId() {
        return opTypeId;
    }

 setOpTypeId( value) {
        this.opTypeId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "OperatingLocationTypeReference");
	}
};
