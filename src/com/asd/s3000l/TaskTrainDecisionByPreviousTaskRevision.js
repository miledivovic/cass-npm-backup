
module.exports = class TaskTrainDecisionByPreviousTaskRevision extends EcRemoteLinkedData {
iterationId;
dcsnRtnle;
iterRtnle;
iterDate;
perfObj;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getIterationId() {
        return iterationId;
    }

 setIterationId( value) {
        this.iterationId = value;
    }

 getDcsnRtnle() {
        if (this.dcsnRtnle == null) {
            this.dcsnRtnle = [];
        }
        return this.dcsnRtnle;
    }

 getIterRtnle() {
        if (this.iterRtnle == null) {
            this.iterRtnle = [];
        }
        return this.iterRtnle;
    }

 getIterDate() {
        return iterDate;
    }

 setIterDate( value) {
        this.iterDate = value;
    }

 getPerfObj() {
        if (this.perfObj == null) {
            this.perfObj = [];
        }
        return this.perfObj;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskTrainDecisionByPreviousTaskRevision");
	}
};
