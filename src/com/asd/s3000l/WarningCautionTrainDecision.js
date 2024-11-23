
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class WarningCautionTrainDecision extends EcRemoteLinkedData {
    iterationId;
    trainLev;
    trainLevRtnle;
    iterRtnle;
    iterDate;
    orgInfos;
    docs;
    rmks;
    ksaReqs;
    uid;
    uri;
    crud;

    getIterationId() {
        return this.iterationId;
    }

    setIterationId(value) {
        this.iterationId = value;
    }

    getTrainLev() {
        return this.trainLev;
    }

    setTrainLev(value) {
        this.trainLev = value;
    }

    getTrainLevRtnle() {
        if (this.trainLevRtnle == null) {
            this.trainLevRtnle = [];
        }
        return this.trainLevRtnle;
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
        super("http://www.asd-europe.org/s-series/s3000l", "WarningCautionTrainDecision");
    }
};
