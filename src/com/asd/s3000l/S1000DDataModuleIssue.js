
module.exports = class S1000DDataModuleIssue extends EcRemoteLinkedData {
dmIssId;
rmks;
uid;
crud;

 getDmIssId() {
        return dmIssId;
    }

 setDmIssId( value) {
        this.dmIssId = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "S1000DDataModuleIssue");
	}
};
