
module.exports = class LsaFailureModeDistributionRating extends EcRemoteLinkedData {
code;
applic;
docs;
rmks;

 getCode() {
        return code;
    }

 setCode( value) {
        this.code = value;
    }

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
    }

 getDocs() {
        return docs;
    }

 setDocs( value) {
        this.docs = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "LsaFailureModeDistributionRating");
	}
};
