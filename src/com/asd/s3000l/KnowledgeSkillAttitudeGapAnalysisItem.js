
module.exports = class KnowledgeSkillAttitudeGapAnalysisItem extends EcRemoteLinkedData {
ksaGap;

 getKsaGap() {
        if (this.ksaGap == null) {
            this.ksaGap = [];
        }
        return this.ksaGap;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "KnowledgeSkillAttitudeGapAnalysisItem");
	}
};
