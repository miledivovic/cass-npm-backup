

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class DocumentAssignment extends EcRemoteLinkedData {
    docRole;
    docPortion;
    docRef;
    docIssRef;
    rmks;
    applic;
    uid;
    crud;

    getDocRole() {
        return this.docRole;
    }

    setDocRole(value) {
        this.docRole = value;
    }

    getDocPortion() {
        return this.docPortion;
    }

    setDocPortion(value) {
        this.docPortion = value;
    }

    getDocRef() {
        return this.docRef;
    }

    setDocRef(value) {
        this.docRef = value;
    }

    getDocIssRef() {
        return this.docIssRef;
    }

    setDocIssRef(value) {
        this.docIssRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "DocumentAssignment");
    }
};
