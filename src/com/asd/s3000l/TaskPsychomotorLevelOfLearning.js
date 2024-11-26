
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskPsychomotorLevelOfLearning extends EcRemoteLinkedData {
    psychoIterId;
    psychoLoL;
    taskLoLChar;
    taskKSAGaps;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getPsychoIterId() {
        return this.psychoIterId;
    }

    setPsychoIterId(value) {
        this.psychoIterId = value;
    }

    getPsychoLoL() {
        return this.psychoLoL;
    }

    setPsychoLoL(value) {
        this.psychoLoL = value;
    }

    getTaskLoLChar() {
        return this.taskLoLChar;
    }

    setTaskLoLChar(value) {
        this.taskLoLChar = value;
    }

    getTaskKSAGaps() {
        return this.taskKSAGaps;
    }

    setTaskKSAGaps(value) {
        this.taskKSAGaps = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TaskPsychomotorLevelOfLearning");
    }
};
