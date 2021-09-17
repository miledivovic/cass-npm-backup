
module.exports = class TaskKnowledgeSkillAttitudeGapItem extends EcRemoteLinkedData {
taskKSAGap;

 getTaskKSAGap() {
        if (this.taskKSAGap == null) {
            this.taskKSAGap = [];
        }
        return this.taskKSAGap;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskKnowledgeSkillAttitudeGapItem");
	}
};
