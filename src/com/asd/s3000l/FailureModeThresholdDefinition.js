

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class FailureModeThresholdDefinition extends EcRemoteLinkedData {
    nrOfEvnts;
    fmRef;
    rmks;
    applic;
    uid;
    crud;

    getNrOfEvnts() {
        return this.nrOfEvnts;
    }

    setNrOfEvnts(value) {
        this.nrOfEvnts = value;
    }

    getFmRef() {
        return this.fmRef;
    }

    setFmRef(value) {
        this.fmRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "FailureModeThresholdDefinition");
    }
};
