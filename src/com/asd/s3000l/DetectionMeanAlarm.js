
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
        return alarmDescr;
    }

 setAlarmDescr( value) {
        this.alarmDescr = value;
    }

 getFalseAlarmRte() {
        return falseAlarmRte;
    }

 setFalseAlarmRte( value) {
        this.falseAlarmRte = value;
    }

 getAlarmPres() {
        return alarmPres;
    }

 setAlarmPres( value) {
        this.alarmPres = value;
    }

 getFmDetect() {
        if (this.fmDetect == null) {
            this.fmDetect = [];
        }
        return this.fmDetect;
    }

 getDocs() {
        return docs;
    }

 setDocs( value) {
        this.docs = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
    }

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "DetectionMeanAlarm");
	}
};
