
module.exports = class TaskDocumentResource extends EcRemoteLinkedData {
fixed;
duration;
relRes;
docRef;
docs;
rmks;
applic;
uid;
crud;

 getFixed() {
        return fixed;
    }

 setFixed( value) {
        this.fixed = value;
    }

 getDuration() {
        if (this.duration == null) {
            this.duration = [];
        }
        return this.duration;
    }

 getRelRes() {
        if (this.relRes == null) {
            this.relRes = [];
        }
        return this.relRes;
    }

 getDocRef() {
        return docRef;
    }

 setDocRef( value) {
        this.docRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskDocumentResource");
	}
};
