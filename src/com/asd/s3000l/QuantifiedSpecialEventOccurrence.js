
module.exports = class QuantifiedSpecialEventOccurrence extends EcRemoteLinkedData {
occRte;
usagePhaseRef;
docs;
rmks;
applic;
uid;
crud;

 getOccRte() {
        if (this.occRte == null) {
            this.occRte = [];
        }
        return this.occRte;
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
		super("http://www.asd-europe.org/s-series/s3000l", "QuantifiedSpecialEventOccurrence");
	}
};
