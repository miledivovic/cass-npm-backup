
const CrudCodeValues = require("./CrudCodeValues");
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
        return this.gapIterId;
    }

    setGapIterId(value) {
        this.gapIterId = value;
    }

    getGapDescr() {
        if (this.gapDescr == null) {
            this.gapDescr = [];
        }
        return this.gapDescr;
    }

    getEvalCompDef() {
        return this.evalCompDef;
    }

    setEvalCompDef(value) {
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
        return this.orgInfos;
    }

    setOrgInfos(value) {
        this.orgInfos = value;
    }

    getDocs() {
        return this.docs;
    }

    setDocs(value) {
        this.docs = value;
    }

    getRmks() {
        return this.rmks;
    }

    setRmks(value) {
        this.rmks = value;
    }

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
    }

    getUri() {
        return this.uri;
    }

    setUri(value) {
        this.uri = value;
    }

    getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return this.crud;
        }
    }

    setCrud(value) {
        this.crud = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "KnowledgeSkillAttitudeGapDefinitionIteration");
    }
};
