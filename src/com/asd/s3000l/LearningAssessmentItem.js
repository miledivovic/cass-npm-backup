
module.exports = class LearningAssessmentItem extends EcRemoteLinkedData {
assessmnt;

 getAssessmnt() {
        if (this.assessmnt == null) {
            this.assessmnt = [];
        }
        return this.assessmnt;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "LearningAssessmentItem");
	}
};
