
module.exports = class ConditionTypeReference extends EcRemoteLinkedData {
condName;
uidRef;

 getCondName() {
        return condName;
    }

 setCondName( value) {
        this.condName = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ConditionTypeReference");
	}
};
