
module.exports = class ContractContext extends EcRemoteLinkedData {
projRef;
uid;
crud;

 getProjRef() {
        return projRef;
    }

 setProjRef( value) {
        this.projRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ContractContext");
	}
};
