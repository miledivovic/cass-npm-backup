
module.exports = class WarningCautionTrainDecision extends EcRemoteLinkedData {
iterationId;
trainLev;
trainLevRtnle;
iterRtnle;
iterDate;
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

 getTrainLev() {
        return trainLev;
    }

 setTrainLev( value) {
        this.trainLev = value;
    }

 getTrainLevRtnle() {
        if (trainLevRtnle == null) {
            trainLevRtnle = [];
        }
        return this.trainLevRtnle;
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
		super("http://www.asd-europe.org/s-series/s3000l", "WarningCautionTrainDecision");
	}
};
