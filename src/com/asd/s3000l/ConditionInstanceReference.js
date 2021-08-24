
module.exports = class ConditionInstanceReference extends EcRemoteLinkedData {
condName;
condInstId;
uidRef;

 getCondName() {
        return condName;
    }

 setCondName( value) {
        this.condName = value;
    }

 getCondInstId() {
        return condInstId;
    }

 setCondInstId( value) {
        this.condInstId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ConditionInstanceReference");
	}
};
