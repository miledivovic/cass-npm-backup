
module.exports = class ApplicabilityStatementReference extends EcRemoteLinkedData {
applicId;
uidRef;

 getApplicId() {
        return applicId;
    }

 setApplicId( value) {
        this.applicId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityStatementReference");
	}
};
