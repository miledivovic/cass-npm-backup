

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class DetectionMeanCapability extends EcRemoteLinkedData {
    detectMnDescr;
    detectMnType;
    alarm;
    rmks;
    uid;
    crud;

    getDetectMnDescr() {
        return this.detectMnDescr;
    }

    setDetectMnDescr(value) {
        this.detectMnDescr = value;
    }

    getDetectMnType() {
        return this.detectMnType;
    }

    setDetectMnType(value) {
        this.detectMnType = value;
    }

    getAlarm() {
        if (this.alarm == null) {
            this.alarm = [];
        }
        return this.alarm;
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
        super("http://www.asd-europe.org/s-series/s3000l", "DetectionMeanCapability");
    }
};
