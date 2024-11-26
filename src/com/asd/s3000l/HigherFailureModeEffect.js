
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class HigherFailureModeEffect extends EcRemoteLinkedData {
    efctDescr;
    efctLevel;
    beRef;
    docs;
    rmks;
    applic;
    uid;
    crud;

    getEfctDescr() {
        return this.efctDescr;
    }

    setEfctDescr(value) {
        this.efctDescr = value;
    }

    getEfctLevel() {
        return this.efctLevel;
    }

    setEfctLevel(value) {
        this.efctLevel = value;
    }

    getBeRef() {
        return this.beRef;
    }

    setBeRef(value) {
        this.beRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "HigherFailureModeEffect");
    }
};
