
module.exports = class SubstanceDefinitionReference extends EcRemoteLinkedData {
subsId;
uidRef;

 getSubsId() {
        return subsId;
    }

 setSubsId( value) {
        this.subsId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "SubstanceDefinitionReference");
	}
};
