
module.exports = class HigherFailureModeEffect extends EcRemoteLinkedData {
efctDescr;
efctLevel;
beRef;
docs;
rmks;
applic;
uid;
crud;

 getEfctDescr() {
        return efctDescr;
    }

 setEfctDescr( value) {
        this.efctDescr = value;
    }

 getEfctLevel() {
        return efctLevel;
    }

 setEfctLevel( value) {
        this.efctLevel = value;
    }

 getBeRef() {
        return beRef;
    }

 setBeRef( value) {
        this.beRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "HigherFailureModeEffect");
	}
};
