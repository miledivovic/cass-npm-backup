
module.exports = class SupportingTask extends EcRemoteLinkedData {
taskId;
taskRev;
secs;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getTaskId() {
        if (taskId == null) {
            taskId = [];
        }
        return this.taskId;
    }

 getTaskRev() {
        if (taskRev == null) {
            taskRev = [];
        }
        return this.taskRev;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SupportingTask");
	}
};
