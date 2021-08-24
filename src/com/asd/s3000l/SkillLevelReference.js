
module.exports = class SkillLevelReference extends EcRemoteLinkedData {
tradeName;
skillLevName;
uidRef;
uriRef;

 getTradeName() {
        return tradeName;
    }

 setTradeName( value) {
        this.tradeName = value;
    }

 getSkillLevName() {
        return skillLevName;
    }

 setSkillLevName( value) {
        this.skillLevName = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SkillLevelReference");
	}
};
