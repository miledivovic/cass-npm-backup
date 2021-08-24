
module.exports = class SubtaskTimeline extends EcRemoteLinkedData {
evnt;
lag;
subtRef;
docs;
rmks;
applic;
uid;
crud;

 getEvnt() {
        return evnt;
    }

 setEvnt( value) {
        this.evnt = value;
    }

 getLag() {
        if (lag == null) {
            lag = [];
        }
        return this.lag;
    }

 getSubtRef() {
        return subtRef;
    }

 setSubtRef( value) {
        this.subtRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTimeline");
	}
};
