
module.exports = class TaskRef extends EcRemoteLinkedData {
taskId;
uidRef;

 getTaskId() {
        return taskId;
    }

 setTaskId( value) {
        this.taskId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskRef");
	}
};
