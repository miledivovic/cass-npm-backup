
module.exports = class SubtaskByTaskReference extends EcRemoteLinkedData {
subtId;
subtRole;
wcn;
precSubt;
taskRef;
secs;
docs;
rmks;
applic;
uid;
uri;
crud;

 getSubtId() {
        return subtId;
    }

 setSubtId( value) {
        this.subtId = value;
    }

 getSubtRole() {
        return subtRole;
    }

 setSubtRole( value) {
        this.subtRole = value;
    }

 getWcn() {
        if (this.wcn == null) {
            this.wcn = [];
        }
        return this.wcn;
    }

 getPrecSubt() {
        return precSubt;
    }

 setPrecSubt( value) {
        this.precSubt = value;
    }

 getTaskRef() {
        return taskRef;
    }

 setTaskRef( value) {
        this.taskRef = value;
    }

 getSecs() {
        return secs;
    }

 setSecs( value) {
        this.secs = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskByTaskReference");
	}
};
