
module.exports = class MaintenanceLevelReference extends EcRemoteLinkedData {
mlvId;
uidRef;

 getMlvId() {
        return mlvId;
    }

 setMlvId( value) {
        this.mlvId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "MaintenanceLevelReference");
	}
};
