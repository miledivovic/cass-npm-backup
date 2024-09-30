

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ApplicabilityEvaluationByAssertionOfCondition extends EcRemoteLinkedData {
    condTypeRef;
    condInstRef;
    assertValue;
    rmks;
    uid;
    crud;

    getCondTypeRef() {
        return this.condTypeRef;
    }

    setCondTypeRef(value) {
        this.condTypeRef = value;
    }

    getCondInstRef() {
        return this.condInstRef;
    }

    setCondInstRef(value) {
        this.condInstRef = value;
    }

    getAssertValue() {
        return this.assertValue;
    }

    setAssertValue(value) {
        this.assertValue = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityEvaluationByAssertionOfCondition");
    }
};
