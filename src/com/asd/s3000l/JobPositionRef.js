
module.exports = class JobPositionRef extends EcRemoteLinkedData {
jobPosName;
uidRef;
uriRef;

 getJobPosName() {
        return jobPosName;
    }

 setJobPosName( value) {
        this.jobPosName = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "JobPositionRef");
	}
};
