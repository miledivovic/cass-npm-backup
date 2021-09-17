
module.exports = class S1000DPublicationModuleIssue extends EcRemoteLinkedData {
pmIssId;
rmks;
uid;
crud;

 getPmIssId() {
        return pmIssId;
    }

 setPmIssId( value) {
        this.pmIssId = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "S1000DPublicationModuleIssue");
	}
};
