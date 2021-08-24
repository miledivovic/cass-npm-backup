
module.exports = class TaskResourceRelationship extends EcRemoteLinkedData {
relType;
resRef;
rmks;
applic;
uid;
crud;

 getRelType() {
        return relType;
    }

 setRelType( value) {
        this.relType = value;
    }

 getResRef() {
        return resRef;
    }

 setResRef( value) {
        this.resRef = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
    }

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskResourceRelationship");
	}
};
