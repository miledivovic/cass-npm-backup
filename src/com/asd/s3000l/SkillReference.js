
module.exports = class SkillReference extends EcRemoteLinkedData {
skillCode;
uidRef;
uriRef;

 getSkillCode() {
        return skillCode;
    }

 setSkillCode( value) {
        this.skillCode = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SkillReference");
	}
};
