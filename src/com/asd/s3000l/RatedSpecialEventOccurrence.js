
module.exports = class RatedSpecialEventOccurrence extends EcRemoteLinkedData {
occRtg;
usagePhaseRef;
docs;
rmks;
applic;
uid;
crud;

 getOccRtg() {
        if (this.occRtg == null) {
            this.occRtg = [];
        }
        return this.occRtg;
    }

 getUsagePhaseRef() {
        if (this.usagePhaseRef == null) {
            this.usagePhaseRef = [];
        }
        return this.usagePhaseRef;
    }

 getDocs() {
        return docs;
    }

 setDocs( value) {
        this.docs = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "RatedSpecialEventOccurrence");
	}
};
