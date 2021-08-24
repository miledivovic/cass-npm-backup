
module.exports = class SubtaskRef extends EcRemoteLinkedData {
taskId;
taskRevId;
subtId;
uidRef;

 getTaskId() {
        return taskId;
    }

 setTaskId( value) {
        this.taskId = value;
    }

 getTaskRevId() {
        return taskRevId;
    }

 setTaskRevId( value) {
        this.taskRevId = value;
    }

 getSubtId() {
        return subtId;
    }

 setSubtId( value) {
        this.subtId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskRef");
	}
};
