
module.exports = class ApplicabilityStatementIdentifier extends EcRemoteLinkedData {
setBy;

 getSetBy() {
        return setBy;
    }

 setSetBy( value) {
        this.setBy = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityStatementIdentifier");
	}
};
