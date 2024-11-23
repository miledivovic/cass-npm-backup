
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class PeriodicTimeLimit extends EcRemoteLinkedData {
    harmoniz;
    limitDescr;
    initial;
    repeat;
    orgInfos;
    docs;
    rmks;
    applic;
    uid;
    crud;

    getHarmoniz() {
        return this.harmoniz;
    }

    setHarmoniz(value) {
        this.harmoniz = value;
    }

    getLimitDescr() {
        return this.limitDescr;
    }

    setLimitDescr(value) {
        this.limitDescr = value;
    }

    getInitial() {
        if (this.initial == null) {
            this.initial = [];
        }
        return this.initial;
    }

    getRepeat() {
        if (this.repeat == null) {
            this.repeat = [];
        }
        return this.repeat;
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

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "PeriodicTimeLimit");
    }
};
