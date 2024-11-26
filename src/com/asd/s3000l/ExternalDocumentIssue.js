

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ExternalDocumentIssue extends EcRemoteLinkedData {
    docIssId;
    issDate;
    rmks;
    uid;
    crud;

    getDocIssId() {
        return this.docIssId;
    }

    setDocIssId(value) {
        this.docIssId = value;
    }

    getIssDate() {
        return this.issDate;
    }

    setIssDate(value) {
        this.issDate = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ExternalDocumentIssue");
    }
};
