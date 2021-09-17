
module.exports = class TaskRequirement extends EcRemoteLinkedData {
trId;
trRev;
secs;
orgInfos;
docs;
rmks;
applic;
uid;
crud;

 getTrId() {
        return trId;
    }

 setTrId( value) {
        this.trId = value;
    }

 getTrRev() {
        if (this.trRev == null) {
            this.trRev = [];
        }
        return this.trRev;
    }

 getSecs() {
        return secs;
    }

 setSecs( value) {
        this.secs = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskRequirement");
	}
};
