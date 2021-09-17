
module.exports = class AllocatedMaintenanceLevel extends EcRemoteLinkedData {
opLocRef;
opTypeRef;
mlvRef;
mLocRef;
rmks;
applic;
uid;
crud;

 getOpLocRef() {
        return opLocRef;
    }

 setOpLocRef( value) {
        this.opLocRef = value;
    }

 getOpTypeRef() {
        return opTypeRef;
    }

 setOpTypeRef( value) {
        this.opTypeRef = value;
    }

 getMlvRef() {
        return mlvRef;
    }

 setMlvRef( value) {
        this.mlvRef = value;
    }

 getMLocRef() {
        return mLocRef;
    }

 setMLocRef( value) {
        this.mLocRef = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
    }

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "AllocatedMaintenanceLevel");
	}
};
