

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class FailureModeDetection extends EcRemoteLinkedData {
    detectRte;
    fmRef;
    uid;
    crud;

    getDetectRte() {
        return this.detectRte;
    }

    setDetectRte(value) {
        this.detectRte = value;
    }

    getFmRef() {
        return this.fmRef;
    }

    setFmRef(value) {
        this.fmRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "FailureModeDetection");
    }
};
