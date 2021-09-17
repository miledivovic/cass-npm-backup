
module.exports = class KnowledgeSkillAttitudeGapDefinitionIteration extends EcRemoteLinkedData {
gapIterId;
gapDescr;
evalCompDef;
taskGapSource;
gapLO;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getGapIterId() {
        return gapIterId;
    }

 setGapIterId( value) {
        this.gapIterId = value;
    }

 getGapDescr() {
        if (this.gapDescr == null) {
            this.gapDescr = [];
        }
        return this.gapDescr;
    }

 getEvalCompDef() {
        return evalCompDef;
    }

 setEvalCompDef( value) {
        this.evalCompDef = value;
    }

 getTaskGapSource() {
        if (this.taskGapSource == null) {
            this.taskGapSource = [];
        }
        return this.taskGapSource;
    }

 getGapLO() {
        if (this.gapLO == null) {
            this.gapLO = [];
        }
        return this.gapLO;
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
		super("http://www.asd-europe.org/s-series/s3000l", "KnowledgeSkillAttitudeGapDefinitionIteration");
	}
};
