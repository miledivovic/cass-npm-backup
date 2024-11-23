
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskCognitiveLevelOfLearning extends EcRemoteLinkedData {
    cognIterId;
    cognLoL;
    taskLoLChar;
    taskKSAGaps;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getCognIterId() {
        return this.cognIterId;
    }

    setCognIterId(value) {
        this.cognIterId = value;
    }

    getCognLoL() {
        return this.cognLoL;
    }

    setCognLoL(value) {
        this.cognLoL = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TaskCognitiveLevelOfLearning");
    }
};
