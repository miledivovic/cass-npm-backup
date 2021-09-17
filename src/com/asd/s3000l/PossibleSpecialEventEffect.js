
module.exports = class PossibleSpecialEventEffect extends EcRemoteLinkedData {
sEvntRef;
rmks;
applic;
uid;
crud;

 getSEvntRef() {
        return sEvntRef;
    }

 setSEvntRef( value) {
        this.sEvntRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "PossibleSpecialEventEffect");
	}
};
