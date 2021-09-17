
module.exports = class SupportingTaskTarget extends EcRemoteLinkedData {
taskFreq;
taskRef;
orgInfos;
docs;
rmks;
applic;
uid;
crud;

 getTaskFreq() {
        if (this.taskFreq == null) {
            this.taskFreq = [];
        }
        return this.taskFreq;
    }

 getTaskRef() {
        return taskRef;
    }

 setTaskRef( value) {
        this.taskRef = value;
    }

 getOrgInfos() {
        return orgInfos;
    }

 setOrgInfos( value) {
        this.orgInfos = value;
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

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
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

    TaskFreq = class TaskFreq {
frequency;
calcMthd;
docs;
rmks;
applic;

 getFrequency() {
            if (this.frequency == null) {
                this.frequency = [];
            }
            return this.frequency;
        }

 getCalcMthd() {
            return calcMthd;
        }

 setCalcMthd( value) {
            this.calcMthd = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "SupportingTaskTarget");
	}
};
