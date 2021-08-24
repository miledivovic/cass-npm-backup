
module.exports = class AllowedProductConfigurationByConfigurationIdentifierReference extends EcRemoteLinkedData {
prodId;
prodVarId;
prodConfId;
uidRef;

 getProdId() {
        return prodId;
    }

 setProdId( value) {
        this.prodId = value;
    }

 getProdVarId() {
        return prodVarId;
    }

 setProdVarId( value) {
        this.prodVarId = value;
    }

 getProdConfId() {
        return prodConfId;
    }

 setProdConfId( value) {
        this.prodConfId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "AllowedProductConfigurationByConfigurationIdentifierReference");
	}
};
