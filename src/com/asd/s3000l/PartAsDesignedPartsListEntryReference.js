
module.exports = class PartAsDesignedPartsListEntryReference extends EcRemoteLinkedData {
partId;
pListType;
pListRevId;
posId;
uidRef;

 getPartId() {
        return partId;
    }

 setPartId( value) {
        this.partId = value;
    }

 getPListType() {
        return pListType;
    }

 setPListType( value) {
        this.pListType = value;
    }

 getPListRevId() {
        return pListRevId;
    }

 setPListRevId( value) {
        this.pListRevId = value;
    }

 getPosId() {
        return posId;
    }

 setPosId( value) {
        this.posId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "PartAsDesignedPartsListEntryReference");
	}
};
