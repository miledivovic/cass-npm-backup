
module.exports = class TaskPersonnelResource extends EcRemoteLinkedData {
fixed;
duration;
persRole;
number;
laborTime;
relRes;
compt;
docs;
rmks;
applic;
uid;
crud;

 getFixed() {
        return fixed;
    }

 setFixed( value) {
        this.fixed = value;
    }

 getDuration() {
        if (duration == null) {
            duration = [];
        }
        return this.duration;
    }

 getPersRole() {
        return persRole;
    }

 setPersRole( value) {
        this.persRole = value;
    }

 getNumber() {
        if (number == null) {
            number = [];
        }
        return this.number;
    }

 getLaborTime() {
        if (laborTime == null) {
            laborTime = [];
        }
        return this.laborTime;
    }

 getRelRes() {
        if (relRes == null) {
            relRes = [];
        }
        return this.relRes;
    }

 getCompt() {
        if (compt == null) {
            compt = [];
        }
        return this.compt;
    }

 getDocs() {
        return docs;
    }

 setDocs( value) {
        this.docs = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskPersonnelResource");
	}
};
