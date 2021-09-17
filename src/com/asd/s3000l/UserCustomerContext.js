
module.exports = class UserCustomerContext extends EcRemoteLinkedData {
orgRef;
uid;
crud;

 getOrgRef() {
        return orgRef;
    }

 setOrgRef( value) {
        this.orgRef = value;
    }

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "UserCustomerContext");
	}
};
