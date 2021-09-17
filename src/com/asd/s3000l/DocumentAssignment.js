
module.exports = class DocumentAssignment extends EcRemoteLinkedData {
docRole;
docPortion;
docRef;
docIssRef;
rmks;
applic;
uid;
crud;

 getDocRole() {
        return docRole;
    }

 setDocRole( value) {
        this.docRole = value;
    }

 getDocPortion() {
        return docPortion;
    }

 setDocPortion( value) {
        this.docPortion = value;
    }

 getDocRef() {
        return docRef;
    }

 setDocRef( value) {
        this.docRef = value;
    }

 getDocIssRef() {
        return docIssRef;
    }

 setDocIssRef( value) {
        this.docIssRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "DocumentAssignment");
	}
};
