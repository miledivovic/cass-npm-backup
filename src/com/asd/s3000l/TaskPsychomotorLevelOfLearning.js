
module.exports = class TaskPsychomotorLevelOfLearning extends EcRemoteLinkedData {
psychoIterId;
psychoLoL;
taskLoLChar;
taskKSAGaps;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getPsychoIterId() {
        return psychoIterId;
    }

 setPsychoIterId( value) {
        this.psychoIterId = value;
    }

 getPsychoLoL() {
        return psychoLoL;
    }

 setPsychoLoL( value) {
        this.psychoLoL = value;
    }

 getTaskLoLChar() {
        return taskLoLChar;
    }

 setTaskLoLChar( value) {
        this.taskLoLChar = value;
    }

 getTaskKSAGaps() {
        return taskKSAGaps;
    }

 setTaskKSAGaps( value) {
        this.taskKSAGaps = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskPsychomotorLevelOfLearning");
	}
};
