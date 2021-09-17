
module.exports = class LearningObjectiveRevision extends EcRemoteLinkedData {
loRevId;
loRevRtnle;
loDescr;
loPerfStd;
loTrainStrat;
relLO;
assessmnts;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getLoRevId() {
        return loRevId;
    }

 setLoRevId( value) {
        this.loRevId = value;
    }

 getLoRevRtnle() {
        if (this.loRevRtnle == null) {
            this.loRevRtnle = [];
        }
        return this.loRevRtnle;
    }

 getLoDescr() {
        if (this.loDescr == null) {
            this.loDescr = [];
        }
        return this.loDescr;
    }

 getLoPerfStd() {
        if (this.loPerfStd == null) {
            this.loPerfStd = [];
        }
        return this.loPerfStd;
    }

 getLoTrainStrat() {
        if (this.loTrainStrat == null) {
            this.loTrainStrat = [];
        }
        return this.loTrainStrat;
    }

 getRelLO() {
        if (this.relLO == null) {
            this.relLO = [];
        }
        return this.relLO;
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
		super("http://www.asd-europe.org/s-series/s3000l", "LearningObjectiveRevision");
	}
};
