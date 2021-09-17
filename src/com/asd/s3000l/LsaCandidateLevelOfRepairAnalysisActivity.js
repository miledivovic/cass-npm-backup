
module.exports = class LsaCandidateLevelOfRepairAnalysisActivity extends EcRemoteLinkedData {
indicator;
rationale;
status;
update;
orgInfos;
docs;
rmks;
uid;
crud;

 getIndicator() {
        return indicator;
    }

 setIndicator( value) {
        this.indicator = value;
    }

 getRationale() {
        return rationale;
    }

 setRationale( value) {
        this.rationale = value;
    }

 getStatus() {
        return status;
    }

 setStatus( value) {
        this.status = value;
    }

 getUpdate() {
        return update;
    }

 setUpdate( value) {
        this.update = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "LsaCandidateLevelOfRepairAnalysisActivity");
	}
};
