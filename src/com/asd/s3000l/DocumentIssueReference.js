
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class DocumentIssueReference extends EcRemoteLinkedData {
    docId;
    docIssId;
    dmc;
    dmIssId;
    pmc;
    pmIssId;
    uidRef;

    getDocId() {
        return this.docId;
    }

    setDocId(value) {
        this.docId = value;
    }

    getDocIssId() {
        return this.docIssId;
    }

    setDocIssId(value) {
        this.docIssId = value;
    }

    getDmc() {
        return this.dmc;
    }

    setDmc(value) {
        this.dmc = value;
    }

    getDmIssId() {
        return this.dmIssId;
    }

    setDmIssId(value) {
        this.dmIssId = value;
    }

    getPmc() {
        return this.pmc;
    }

    setPmc(value) {
        this.pmc = value;
    }

    getPmIssId() {
        return this.pmIssId;
    }

    setPmIssId(value) {
        this.pmIssId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "DocumentIssueReference");
    }
};
