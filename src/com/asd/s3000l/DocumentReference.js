
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class DocumentReference extends EcRemoteLinkedData {
    docId;
    dmc;
    pmc;
    uidRef;

    getDocId() {
        return this.docId;
    }

    setDocId(value) {
        this.docId = value;
    }

    getDmc() {
        return this.dmc;
    }

    setDmc(value) {
        this.dmc = value;
    }

    getPmc() {
        return this.pmc;
    }

    setPmc(value) {
        this.pmc = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "DocumentReference");
    }
};
