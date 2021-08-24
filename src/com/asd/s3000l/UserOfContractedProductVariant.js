
module.exports = class UserOfContractedProductVariant extends EcRemoteLinkedData {
orgRef;
customerCxt;
uid;
crud;

 getOrgRef() {
        return orgRef;
    }

 setOrgRef( value) {
        this.orgRef = value;
    }

 getCustomerCxt() {
        return customerCxt;
    }

 setCustomerCxt( value) {
        this.customerCxt = value;
    }

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "UserOfContractedProductVariant");
	}
};
