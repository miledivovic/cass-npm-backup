
module.exports = class TaskRevisionWarningCautionNote extends EcRemoteLinkedData {
wcnRef;
wcnDef;
applic;
uid;
crud;

 getWcnRef() {
        return wcnRef;
    }

 setWcnRef( value) {
        this.wcnRef = value;
    }

 getWcnDef() {
        return wcnDef;
    }

 setWcnDef( value) {
        this.wcnDef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskRevisionWarningCautionNote");
	}
};
