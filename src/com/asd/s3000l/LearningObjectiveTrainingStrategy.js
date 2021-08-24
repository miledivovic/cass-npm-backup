
module.exports = class LearningObjectiveTrainingStrategy extends EcRemoteLinkedData {
trainStrName;
trainComp;
assessmnts;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getTrainStrName() {
        if (trainStrName == null) {
            trainStrName = [];
        }
        return this.trainStrName;
    }

 getTrainComp() {
        if (trainComp == null) {
            trainComp = [];
        }
        return this.trainComp;
    }

 getAssessmnts() {
        return assessmnts;
    }

 setAssessmnts( value) {
        this.assessmnts = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "LearningObjectiveTrainingStrategy");
	}
};
