
module.exports = class LearningObjective extends EcRemoteLinkedData {
loId;
loType;
loName;
loRev;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getLoId() {
        if (loId == null) {
            loId = [];
        }
        return this.loId;
    }

 getLoType() {
        return loType;
    }

 setLoType( value) {
        this.loType = value;
    }

 getLoName() {
        if (loName == null) {
            loName = [];
        }
        return this.loName;
    }

 getLoRev() {
        if (loRev == null) {
            loRev = [];
        }
        return this.loRev;
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

 getUri() {
        return uri;
    }

 setUri( value) {
        this.uri = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "LearningObjective");
	}
};
