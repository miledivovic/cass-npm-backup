
module.exports = class TaskKnowledgeSkillAttitudeGap extends EcRemoteLinkedData {
taskKSAGapId;
taskKSAGapDescr;
evalCompDef;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getTaskKSAGapId() {
        return taskKSAGapId;
    }

 setTaskKSAGapId( value) {
        this.taskKSAGapId = value;
    }

 getTaskKSAGapDescr() {
        if (taskKSAGapDescr == null) {
            taskKSAGapDescr = [];
        }
        return this.taskKSAGapDescr;
    }

 getEvalCompDef() {
        return evalCompDef;
    }

 setEvalCompDef( value) {
        this.evalCompDef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskKnowledgeSkillAttitudeGap");
	}
};
