
module.exports = class FailureModeReference extends EcRemoteLinkedData {
fmId;
uidRef;

 getFmId() {
        return fmId;
    }

 setFmId( value) {
        this.fmId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "FailureModeReference");
	}
};
