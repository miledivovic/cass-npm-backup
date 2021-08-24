
module.exports = class KnowledgeSkillAttitudeGapDefinitionRef extends EcRemoteLinkedData {
gapId;
uidRef;
uriRef;

 getGapId() {
        return gapId;
    }

 setGapId( value) {
        this.gapId = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "KnowledgeSkillAttitudeGapDefinitionRef");
	}
};
