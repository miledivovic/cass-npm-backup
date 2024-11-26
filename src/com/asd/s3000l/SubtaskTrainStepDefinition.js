
const CrudCodeValues = require("./CrudCodeValues");
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
        return this.stepId;
    }

    setStepId(value) {
        this.stepId = value;
    }

    getStepName() {
        if (this.stepName == null) {
            this.stepName = [];
        }
        return this.stepName;
    }

    getStepDescr() {
        if (this.stepDescr == null) {
            this.stepDescr = [];
        }
        return this.stepDescr;
    }

    getPerfStd() {
        if (this.perfStd == null) {
            this.perfStd = [];
        }
        return this.perfStd;
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

    getKsaReqs() {
        return this.ksaReqs;
    }

    setKsaReqs(value) {
        this.ksaReqs = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTrainStepDefinition");
    }
};
