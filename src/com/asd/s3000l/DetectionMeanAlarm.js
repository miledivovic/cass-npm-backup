

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class DetectionMeanAlarm extends EcRemoteLinkedData {
    alarmDescr;
    falseAlarmRte;
    alarmPres;
    fmDetect;
    docs;
    rmks;
    uid;
    crud;

    getAlarmDescr() {
        return this.alarmDescr;
    }

    setAlarmDescr(value) {
        this.alarmDescr = value;
    }

    getFalseAlarmRte() {
        return this.falseAlarmRte;
    }

    setFalseAlarmRte(value) {
        this.falseAlarmRte = value;
    }

    getAlarmPres() {
        return this.alarmPres;
    }

    setAlarmPres(value) {
        this.alarmPres = value;
    }

    getFmDetect() {
        if (this.fmDetect == null) {
            this.fmDetect = [];
        }
        return this.fmDetect;
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
        super("http://www.asd-europe.org/s-series/s3000l", "DetectionMeanAlarm");
    }
};
