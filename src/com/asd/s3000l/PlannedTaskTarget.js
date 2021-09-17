
module.exports = class PlannedTaskTarget extends EcRemoteLinkedData {
taskFreq;
taskRef;
maintLevel;
orgInfos;
docs;
rmks;
applic;
timeLimits;
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

 getMaintLevel() {
        if (this.maintLevel == null) {
            this.maintLevel = [];
        }
        return this.maintLevel;
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

 getTimeLimits() {
        return timeLimits;
    }

 setTimeLimits(value) {
        this.timeLimits = value;
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

    TimeLimits = class TimeLimits {
timeLimitNonAbstractClasses;

 getTimeLimitNonAbstractClasses() {
            if (this.timeLimitNonAbstractClasses == null) {
                this.timeLimitNonAbstractClasses = [];
            }
            return this.timeLimitNonAbstractClasses;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "PlannedTaskTarget");
	}
};
