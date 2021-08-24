
module.exports = class FailureModeDetection extends EcRemoteLinkedData {
detectRte;
fmRef;
uid;
crud;

 getDetectRte() {
        return detectRte;
    }

 setDetectRte( value) {
        this.detectRte = value;
    }

 getFmRef() {
        return fmRef;
    }

 setFmRef( value) {
        this.fmRef = value;
    }

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "FailureModeDetection");
	}
};
