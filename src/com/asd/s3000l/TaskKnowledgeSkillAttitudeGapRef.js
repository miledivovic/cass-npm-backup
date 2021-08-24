
module.exports = class TaskKnowledgeSkillAttitudeGapRef extends EcRemoteLinkedData {
taskAffLoLRef;
taskCognLoLRef;
taskPsychLoLRef;
taskKSAGapId;
uidRef;
uriRef;

 getTaskAffLoLRef() {
        return taskAffLoLRef;
    }

 setTaskAffLoLRef( value) {
        this.taskAffLoLRef = value;
    }

 getTaskCognLoLRef() {
        return taskCognLoLRef;
    }

 setTaskCognLoLRef( value) {
        this.taskCognLoLRef = value;
    }

 getTaskPsychLoLRef() {
        return taskPsychLoLRef;
    }

 setTaskPsychLoLRef( value) {
        this.taskPsychLoLRef = value;
    }

 getTaskKSAGapId() {
        return taskKSAGapId;
    }

 setTaskKSAGapId( value) {
        this.taskKSAGapId = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskKnowledgeSkillAttitudeGapRef");
	}
};
