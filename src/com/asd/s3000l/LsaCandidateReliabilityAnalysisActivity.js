
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class LsaCandidateReliabilityAnalysisActivity extends EcRemoteLinkedData {
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
        return this.indicator;
    }

    setIndicator(value) {
        this.indicator = value;
    }

    getRationale() {
        return this.rationale;
    }

    setRationale(value) {
        this.rationale = value;
    }

    getStatus() {
        return this.status;
    }

    setStatus(value) {
        this.status = value;
    }

    getUpdate() {
        return this.update;
    }

    setUpdate(value) {
        this.update = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "LsaCandidateReliabilityAnalysisActivity");
    }
};
