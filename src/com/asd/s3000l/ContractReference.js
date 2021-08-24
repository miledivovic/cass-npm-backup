
module.exports = class ContractReference extends EcRemoteLinkedData {
contrId;
uidRef;

 getContrId() {
        return contrId;
    }

 setContrId( value) {
        this.contrId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ContractReference");
	}
};
