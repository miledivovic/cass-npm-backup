
module.exports = class SubtaskTrainStepReference extends EcRemoteLinkedData {
stepId;
subtTrainRef;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getStepId() {
        return stepId;
    }

 setStepId( value) {
        this.stepId = value;
    }

 getSubtTrainRef() {
        return subtTrainRef;
    }

 setSubtTrainRef( value) {
        this.subtTrainRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTrainStepReference");
	}
};
