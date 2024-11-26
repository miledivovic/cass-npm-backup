

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ApplicabilityEvaluationByAssertionOfSerializedItems extends EcRemoteLinkedData {
    range;
    partRef;
    prodRef;
    prodVarRef;
    rmks;
    uid;
    crud;

    getRange() {
        return this.range;
    }

    setRange(value) {
        this.range = value;
    }

    getPartRef() {
        return this.partRef;
    }

    setPartRef(value) {
        this.partRef = value;
    }

    getProdRef() {
        return this.prodRef;
    }

    setProdRef(value) {
        this.prodRef = value;
    }

    getProdVarRef() {
        return this.prodVarRef;
    }

    setProdVarRef(value) {
        this.prodVarRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityEvaluationByAssertionOfSerializedItems");
    }
};
