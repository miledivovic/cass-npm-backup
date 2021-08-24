
module.exports = class TaskRequirementTarget extends EcRemoteLinkedData {
taskReqRef;
timeLimits;
uid;
crud;

 getTaskReqRef() {
        return taskReqRef;
    }

 setTaskReqRef( value) {
        this.taskReqRef = value;
    }

 getTimeLimits() {
        return timeLimits;
    }

 setTimeLimits( value) {
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

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskRequirementTarget");
	}
};
