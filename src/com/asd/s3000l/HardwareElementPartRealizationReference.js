
module.exports = class HardwareElementPartRealizationReference extends EcRemoteLinkedData {
uidRef;

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "HardwareElementPartRealizationReference");
	}
};
