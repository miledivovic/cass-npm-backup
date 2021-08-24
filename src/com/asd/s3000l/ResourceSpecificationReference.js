
module.exports = class ResourceSpecificationReference extends EcRemoteLinkedData {
resSpecId;
uidRef;

 getResSpecId() {
        return resSpecId;
    }

 setResSpecId( value) {
        this.resSpecId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ResourceSpecificationReference");
	}
};
