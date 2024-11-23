
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskKnowledgeSkillAttitudeGap extends EcRemoteLinkedData {
    taskKSAGapId;
    taskKSAGapDescr;
    evalCompDef;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getTaskKSAGapId() {
        return this.taskKSAGapId;
    }

    setTaskKSAGapId(value) {
        this.taskKSAGapId = value;
    }

    getTaskKSAGapDescr() {
        if (this.taskKSAGapDescr == null) {
            this.taskKSAGapDescr = [];
        }
        return this.taskKSAGapDescr;
    }

    getEvalCompDef() {
        return this.evalCompDef;
    }

    setEvalCompDef(value) {
        this.evalCompDef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TaskKnowledgeSkillAttitudeGap");
    }
};
