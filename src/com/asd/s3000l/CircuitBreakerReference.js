
module.exports = class CircuitBreakerReference extends EcRemoteLinkedData {
cbId;
uidRef;

 getCbId() {
        return cbId;
    }

 setCbId( value) {
        this.cbId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "CircuitBreakerReference");
	}
};
