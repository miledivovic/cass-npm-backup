
module.exports = class TaskTrainDecisionByTaskGrouping extends EcRemoteLinkedData {
iterationId;
dcsnRtnle;
iterRtnle;
iterDate;
perfObj;
taskRef;
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
        if (dcsnRtnle == null) {
            dcsnRtnle = [];
        }
        return this.dcsnRtnle;
    }

 getIterRtnle() {
        if (iterRtnle == null) {
            iterRtnle = [];
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
        if (perfObj == null) {
            perfObj = [];
        }
        return this.perfObj;
    }

 getTaskRef() {
        return taskRef;
    }

 setTaskRef( value) {
        this.taskRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskTrainDecisionByTaskGrouping");
	}
};
