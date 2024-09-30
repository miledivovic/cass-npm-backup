
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubtaskTrainDecisionDefinition extends EcRemoteLinkedData {
    subtTrainId;
    coordCat;
    subtDiff;
    subtImp;
    subtFreq;
    subtTrainLvl;
    subtTrainLvlRtnle;
    trainDiff;
    trainLvl;
    trainLvlRtnle;
    perfObj;
    subtaskTrainStepNonAbstractClasses;
    subtRef;
    orgInfos;
    docs;
    rmks;
    ksaReqs;
    uid;
    uri;
    crud;

    getSubtTrainId() {
        return this.subtTrainId;
    }

    setSubtTrainId(value) {
        this.subtTrainId = value;
    }

    getCoordCat() {
        return this.coordCat;
    }

    setCoordCat(value) {
        this.coordCat = value;
    }

    getSubtDiff() {
        return this.subtDiff;
    }

    setSubtDiff(value) {
        this.subtDiff = value;
    }

    getSubtImp() {
        return this.subtImp;
    }

    setSubtImp(value) {
        this.subtImp = value;
    }

    getSubtFreq() {
        return this.subtFreq;
    }

    setSubtFreq(value) {
        this.subtFreq = value;
    }

    getSubtTrainLvl() {
        return this.subtTrainLvl;
    }

    setSubtTrainLvl(value) {
        this.subtTrainLvl = value;
    }

    getSubtTrainLvlRtnle() {
        if (this.subtTrainLvlRtnle == null) {
            this.subtTrainLvlRtnle = [];
        }
        return this.subtTrainLvlRtnle;
    }

    getTrainDiff() {
        return this.trainDiff;
    }

    setTrainDiff(value) {
        this.trainDiff = value;
    }

    getTrainLvl() {
        return this.trainLvl;
    }

    setTrainLvl(value) {
        this.trainLvl = value;
    }

    getTrainLvlRtnle() {
        if (this.trainLvlRtnle == null) {
            this.trainLvlRtnle = [];
        }
        return this.trainLvlRtnle;
    }

    getPerfObj() {
        if (this.perfObj == null) {
            this.perfObj = [];
        }
        return this.perfObj;
    }

    getSubtaskTrainStepNonAbstractClasses() {
        if (this.subtaskTrainStepNonAbstractClasses == null) {
            this.subtaskTrainStepNonAbstractClasses = [];
        }
        return this.subtaskTrainStepNonAbstractClasses;
    }

    getSubtRef() {
        return this.subtRef;
    }

    setSubtRef(value) {
        this.subtRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTrainDecisionDefinition");
    }
};
