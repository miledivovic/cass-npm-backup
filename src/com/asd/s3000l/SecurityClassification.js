
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SecurityClassification extends EcRemoteLinkedData {
    secClassRef;
    applic;
    orgInfos;
    docs;
    rmks;
    uid;
    crud;

    getSecClassRef() {
        return this.secClassRef;
    }

    setSecClassRef(value) {
        this.secClassRef = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SecurityClassification");
    }
};
