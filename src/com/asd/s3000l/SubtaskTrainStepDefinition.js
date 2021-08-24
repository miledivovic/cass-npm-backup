
module.exports = class SubtaskTrainStepDefinition extends EcRemoteLinkedData {
stepId;
stepName;
stepDescr;
perfStd;
orgInfos;
docs;
rmks;
ksaReqs;
uid;
uri;
crud;

 getStepId() {
        return stepId;
    }

 setStepId( value) {
        this.stepId = value;
    }

 getStepName() {
        if (stepName == null) {
            stepName = [];
        }
        return this.stepName;
    }

 getStepDescr() {
        if (stepDescr == null) {
            stepDescr = [];
        }
        return this.stepDescr;
    }

 getPerfStd() {
        if (perfStd == null) {
            perfStd = [];
        }
        return this.perfStd;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTrainStepDefinition");
	}
};
