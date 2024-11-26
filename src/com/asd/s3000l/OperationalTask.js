
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OperationalTask extends EcRemoteLinkedData {
    taskId;
    taskRev;
    secs;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getTaskId() {
        if (this.taskId == null) {
            this.taskId = [];
        }
        return this.taskId;
    }

    getTaskRev() {
        if (this.taskRev == null) {
            this.taskRev = [];
        }
        return this.taskRev;
    }

    getSecs() {
        return this.secs;
    }

    setSecs(value) {
        this.secs = value;
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

    Secs = class Secs {
        sec;

        getSec() {
            if (this.sec == null) {
                this.sec = [];
            }
            return this.sec;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "OperationalTask");
    }
};
