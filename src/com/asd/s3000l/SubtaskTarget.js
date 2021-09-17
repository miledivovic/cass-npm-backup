
module.exports = class SubtaskTarget extends EcRemoteLinkedData {
beRef;
partRef;
uid;
crud;

 getBeRef() {
        return beRef;
    }

 setBeRef( value) {
        this.beRef = value;
    }

 getPartRef() {
        return partRef;
    }

 setPartRef( value) {
        this.partRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTarget");
	}
};
