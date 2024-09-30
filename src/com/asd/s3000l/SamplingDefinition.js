
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SamplingDefinition extends EcRemoteLinkedData {
    samplDescr;
    rmks;
    uid;
    crud;

    getSamplDescr() {
        return this.samplDescr;
    }

    setSamplDescr(value) {
        this.samplDescr = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SamplingDefinition");
    }
};
