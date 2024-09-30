

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ContainedSubstance extends EcRemoteLinkedData {
    qty;
    justDescr;
    subsRef;
    docs;
    rmks;
    uid;
    crud;

    getQty() {
        return this.qty;
    }

    setQty(value) {
        this.qty = value;
    }

    getJustDescr() {
        return this.justDescr;
    }

    setJustDescr(value) {
        this.justDescr = value;
    }

    getSubsRef() {
        return this.subsRef;
    }

    setSubsRef(value) {
        this.subsRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ContainedSubstance");
    }
};
