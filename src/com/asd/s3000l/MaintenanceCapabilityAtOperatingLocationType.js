
module.exports = class MaintenanceCapabilityAtOperatingLocationType extends EcRemoteLinkedData {
mlvRef;
uid;
crud;

 getMlvRef() {
        return mlvRef;
    }

 setMlvRef( value) {
        this.mlvRef = value;
    }

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "MaintenanceCapabilityAtOperatingLocationType");
	}
};
