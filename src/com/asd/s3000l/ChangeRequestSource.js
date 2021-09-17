
module.exports = class ChangeRequestSource extends EcRemoteLinkedData {
crRef;
uid;
crud;

 getCrRef() {
        return crRef;
    }

 setCrRef( value) {
        this.crRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ChangeRequestSource");
	}
};
