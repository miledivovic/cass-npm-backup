
module.exports = class TaskTrainDecisionByEvaluationRef extends EcRemoteLinkedData {

taskId;
taskRevId;
iterationId;
uidRef;
uriRef;

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

 getIterationId() {
        return iterationId;
    }

 setIterationId( value) {
        this.iterationId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

 getUriRef() {
        return uriRef;
    }

 setUriRef( value) {
        this.uriRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskTrainDecisionByEvaluationRef");
	}

}
