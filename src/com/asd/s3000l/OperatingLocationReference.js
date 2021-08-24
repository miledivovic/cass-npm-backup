
module.exports = class OperatingLocationReference extends EcRemoteLinkedData {
opLocId;
uidRef;

 getOpLocId() {
        return opLocId;
    }

 setOpLocId( value) {
        this.opLocId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "OperatingLocationReference");
	}
};
