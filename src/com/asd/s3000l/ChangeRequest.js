
module.exports = class ChangeRequest extends EcRemoteLinkedData {
crId;
crDescr;
crObject;
orgInfos;
docs;
rmks;
uid;
crud;

 getCrId() {
        return crId;
    }

 setCrId( value) {
        this.crId = value;
    }

 getCrDescr() {
        return crDescr;
    }

 setCrDescr( value) {
        this.crDescr = value;
    }

 getCrObject() {
        if (this.crObject == null) {
            this.crObject = [];
        }
        return this.crObject;
    }

 getOrgInfos() {
        return orgInfos;
    }

 setOrgInfos( value) {
        this.orgInfos = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ChangeRequest");
	}
};
