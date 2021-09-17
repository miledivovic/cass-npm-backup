
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
        if (this.loId == null) {
            this.loId = [];
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
        if (this.loName == null) {
            this.loName = [];
        }
        return this.loName;
    }

 getLoRev() {
        if (this.loRev == null) {
            this.loRev = [];
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
		super("http://www.asd-europe.org/s-series/s3000l", "LearningObjective");
	}
};
