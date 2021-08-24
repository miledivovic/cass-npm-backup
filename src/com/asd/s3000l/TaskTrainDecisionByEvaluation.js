
module.exports = class TaskTrainDecisionByEvaluation extends EcRemoteLinkedData {
iterationId;
dcsnRtnle;
iterRtnle;
iterDate;
audience;
coordCat;
taskDiff;
taskImp;
taskFreq;
taskTrainLvl;
taskTrainLvlRtnle;
trainDiff;
trainLvl;
trainLvlRtnle;
perfObj;
algTrainLvl;
subtaskTrainDecisionNonAbstractClasses;
orgInfos;
docs;
rmks;
ksaReqs;
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

 getAudience() {
        return audience;
    }

 setAudience(value) {
        this.audience = value;
    }

 getCoordCat() {
        return coordCat;
    }

 setCoordCat( value) {
        this.coordCat = value;
    }

 getTaskDiff() {
        return taskDiff;
    }

 setTaskDiff( value) {
        this.taskDiff = value;
    }

 getTaskImp() {
        return taskImp;
    }

 setTaskImp( value) {
        this.taskImp = value;
    }

 getTaskFreq() {
        return taskFreq;
    }

 setTaskFreq( value) {
        this.taskFreq = value;
    }

 getTaskTrainLvl() {
        return taskTrainLvl;
    }

 setTaskTrainLvl( value) {
        this.taskTrainLvl = value;
    }

 getTaskTrainLvlRtnle() {
        if (taskTrainLvlRtnle == null) {
            taskTrainLvlRtnle = [];
        }
        return this.taskTrainLvlRtnle;
    }

 getTrainDiff() {
        return trainDiff;
    }

 setTrainDiff( value) {
        this.trainDiff = value;
    }

 getTrainLvl() {
        return trainLvl;
    }

 setTrainLvl( value) {
        this.trainLvl = value;
    }

 getTrainLvlRtnle() {
        if (trainLvlRtnle == null) {
            trainLvlRtnle = [];
        }
        return this.trainLvlRtnle;
    }

 getPerfObj() {
        if (perfObj == null) {
            perfObj = [];
        }
        return this.perfObj;
    }

 getAlgTrainLvl() {
        return algTrainLvl;
    }

 setAlgTrainLvl( value) {
        this.algTrainLvl = value;
    }

 getSubtaskTrainDecisionNonAbstractClasses() {
        if (subtaskTrainDecisionNonAbstractClasses == null) {
            subtaskTrainDecisionNonAbstractClasses = [];
        }
        return this.subtaskTrainDecisionNonAbstractClasses;
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

 getKsaReqs() {
        return ksaReqs;
    }

 setKsaReqs( value) {
        this.ksaReqs = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskTrainDecisionByEvaluation");
	}
};
