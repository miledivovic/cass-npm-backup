
module.exports = class PrerequisiteCompetenciesDefinitionRef extends EcRemoteLinkedData {
skillRef;
tradeRef;
skillLevRef;
jobPosRef;
compId;
uidRef;
uriRef;

 getSkillRef() {
        return skillRef;
    }

 setSkillRef( value) {
        this.skillRef = value;
    }

 getTradeRef() {
        return tradeRef;
    }

 setTradeRef( value) {
        this.tradeRef = value;
    }

 getSkillLevRef() {
        return skillLevRef;
    }

 setSkillLevRef( value) {
        this.skillLevRef = value;
    }

 getJobPosRef() {
        return jobPosRef;
    }

 setJobPosRef( value) {
        this.jobPosRef = value;
    }

 getCompId() {
        return compId;
    }

 setCompId( value) {
        this.compId = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "PrerequisiteCompetenciesDefinitionRef");
	}
};
