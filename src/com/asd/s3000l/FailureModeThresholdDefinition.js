
module.exports = class FailureModeThresholdDefinition extends EcRemoteLinkedData {
nrOfEvnts;
fmRef;
rmks;
applic;
uid;
crud;

 getNrOfEvnts() {
        return nrOfEvnts;
    }

 setNrOfEvnts( value) {
        this.nrOfEvnts = value;
    }

 getFmRef() {
        return fmRef;
    }

 setFmRef( value) {
        this.fmRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "FailureModeThresholdDefinition");
	}
};
