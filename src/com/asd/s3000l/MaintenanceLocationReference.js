
module.exports = class MaintenanceLocationReference extends EcRemoteLinkedData {
mLocId;
uidRef;

 getMLocId() {
        return mLocId;
    }

 setMLocId( value) {
        this.mLocId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "MaintenanceLocationReference");
	}
};
