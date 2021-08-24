
module.exports = class TaskRequirementReference extends EcRemoteLinkedData {
trId;
uidRef;

 getTrId() {
        return trId;
    }

 setTrId( value) {
        this.trId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskRequirementReference");
	}
};
