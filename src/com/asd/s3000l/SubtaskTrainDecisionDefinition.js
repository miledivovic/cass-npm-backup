
module.exports = class SubtaskTrainDecisionDefinition extends EcRemoteLinkedData {
subtTrainId;
coordCat;
subtDiff;
subtImp;
subtFreq;
subtTrainLvl;
subtTrainLvlRtnle;
trainDiff;
trainLvl;
trainLvlRtnle;
perfObj;
subtaskTrainStepNonAbstractClasses;
subtRef;
orgInfos;
docs;
rmks;
ksaReqs;
uid;
uri;
crud;

 getSubtTrainId() {
        return subtTrainId;
    }

 setSubtTrainId( value) {
        this.subtTrainId = value;
    }

 getCoordCat() {
        return coordCat;
    }

 setCoordCat( value) {
        this.coordCat = value;
    }

 getSubtDiff() {
        return subtDiff;
    }

 setSubtDiff( value) {
        this.subtDiff = value;
    }

 getSubtImp() {
        return subtImp;
    }

 setSubtImp( value) {
        this.subtImp = value;
    }

 getSubtFreq() {
        return subtFreq;
    }

 setSubtFreq( value) {
        this.subtFreq = value;
    }

 getSubtTrainLvl() {
        return subtTrainLvl;
    }

 setSubtTrainLvl( value) {
        this.subtTrainLvl = value;
    }

 getSubtTrainLvlRtnle() {
        if (this.subtTrainLvlRtnle == null) {
            this.subtTrainLvlRtnle = [];
        }
        return this.subtTrainLvlRtnle;
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
        if (this.trainLvlRtnle == null) {
            this.trainLvlRtnle = [];
        }
        return this.trainLvlRtnle;
    }

 getPerfObj() {
        if (this.perfObj == null) {
            this.perfObj = [];
        }
        return this.perfObj;
    }

 getSubtaskTrainStepNonAbstractClasses() {
        if (this.subtaskTrainStepNonAbstractClasses == null) {
            this.subtaskTrainStepNonAbstractClasses = [];
        }
        return this.subtaskTrainStepNonAbstractClasses;
    }

 getSubtRef() {
        return subtRef;
    }

 setSubtRef( value) {
        this.subtRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTrainDecisionDefinition");
	}
};
