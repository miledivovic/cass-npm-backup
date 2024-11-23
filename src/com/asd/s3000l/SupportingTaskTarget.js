
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SupportingTaskTarget extends EcRemoteLinkedData {
    taskFreq;
    taskRef;
    orgInfos;
    docs;
    rmks;
    applic;
    uid;
    crud;

    getTaskFreq() {
        if (this.taskFreq == null) {
            this.taskFreq = [];
        }
        return this.taskFreq;
    }

    getTaskRef() {
        return this.taskRef;
    }

    setTaskRef(value) {
        this.taskRef = value;
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

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
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

    TaskFreq = class TaskFreq {
        frequency;
        calcMthd;
        docs;
        rmks;
        applic;

        getFrequency() {
            if (this.frequency == null) {
                this.frequency = [];
            }
            return this.frequency;
        }

        getCalcMthd() {
            return this.calcMthd;
        }

        setCalcMthd(value) {
            this.calcMthd = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
            this.applic = value;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "SupportingTaskTarget");
    }
};
