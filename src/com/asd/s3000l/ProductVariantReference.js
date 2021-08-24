
module.exports = class ProductVariantReference extends EcRemoteLinkedData {
prodId;
prodVarId;
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

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ProductVariantReference");
	}
};
