
module.exports = class TrainingComponentSpecialResourceRequirement extends EcRemoteLinkedData {
resName;
resType;
resDescr;
resRef;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getResName() {
        if (this.resName == null) {
            this.resName = [];
        }
        return this.resName;
    }

 getResType() {
        if (this.resType == null) {
            this.resType = [];
        }
        return this.resType;
    }

 getResDescr() {
        if (this.resDescr == null) {
            this.resDescr = [];
        }
        return this.resDescr;
    }

 getResRef() {
        if (this.resRef == null) {
            this.resRef = [];
        }
        return this.resRef;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TrainingComponentSpecialResourceRequirement");
	}
};
