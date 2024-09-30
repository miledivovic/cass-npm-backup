
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskTrainDecisionByPreviousTaskRevision extends EcRemoteLinkedData {
    iterationId;
    dcsnRtnle;
    iterRtnle;
    iterDate;
    perfObj;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getIterationId() {
        return this.iterationId;
    }

    setIterationId(value) {
        this.iterationId = value;
    }

    getDcsnRtnle() {
        if (this.dcsnRtnle == null) {
            this.dcsnRtnle = [];
        }
        return this.dcsnRtnle;
    }

    getIterRtnle() {
        if (this.iterRtnle == null) {
            this.iterRtnle = [];
        }
        return this.iterRtnle;
    }

    getIterDate() {
        return this.iterDate;
    }

    setIterDate(value) {
        this.iterDate = value;
    }

    getPerfObj() {
        if (this.perfObj == null) {
            this.perfObj = [];
        }
        return this.perfObj;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TaskTrainDecisionByPreviousTaskRevision");
    }
};
