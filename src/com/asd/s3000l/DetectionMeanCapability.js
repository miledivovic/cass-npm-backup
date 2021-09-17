
module.exports = class DetectionMeanCapability extends EcRemoteLinkedData {
detectMnDescr;
detectMnType;
alarm;
rmks;
uid;
crud;

 getDetectMnDescr() {
        return detectMnDescr;
    }

 setDetectMnDescr( value) {
        this.detectMnDescr = value;
    }

 getDetectMnType() {
        return detectMnType;
    }

 setDetectMnType( value) {
        this.detectMnType = value;
    }

 getAlarm() {
        if (this.alarm == null) {
            this.alarm = [];
        }
        return this.alarm;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "DetectionMeanCapability");
	}
};
