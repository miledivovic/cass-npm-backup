
module.exports = class TaskJustification extends EcRemoteLinkedData {
taskReqRef;
uid;
crud;

 getTaskReqRef() {
        return taskReqRef;
    }

 setTaskReqRef( value) {
        this.taskReqRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskJustification");
	}
};
