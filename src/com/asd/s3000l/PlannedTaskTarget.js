
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
        if (taskFreq == null) {
            taskFreq = [];
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
        if (maintLevel == null) {
            maintLevel = [];
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
        if (crud == null) {
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
            if (timeLimitNonAbstractClasses == null) {
                timeLimitNonAbstractClasses = [];
            }
            return this.timeLimitNonAbstractClasses;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "PlannedTaskTarget");
	}
};
