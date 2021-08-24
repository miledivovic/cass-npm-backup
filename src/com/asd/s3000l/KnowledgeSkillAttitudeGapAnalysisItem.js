
module.exports = class KnowledgeSkillAttitudeGapAnalysisItem extends EcRemoteLinkedData {
ksaGap;

 getKsaGap() {
        if (ksaGap == null) {
            ksaGap = [];
        }
        return this.ksaGap;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "KnowledgeSkillAttitudeGapAnalysisItem");
	}
};
