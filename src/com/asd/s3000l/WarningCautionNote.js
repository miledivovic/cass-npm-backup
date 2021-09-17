
module.exports = class WarningCautionNote extends EcRemoteLinkedData {
wcnId;
wcnDescr;
wcnType;
trainDcsn;
docs;
rmks;
uid;
uri;
crud;

 getWcnId() {
        return wcnId;
    }

 setWcnId( value) {
        this.wcnId = value;
    }

 getWcnDescr() {
        return wcnDescr;
    }

 setWcnDescr( value) {
        this.wcnDescr = value;
    }

 getWcnType() {
        return wcnType;
    }

 setWcnType( value) {
        this.wcnType = value;
    }

 getTrainDcsn() {
        if (this.trainDcsn == null) {
            this.trainDcsn = [];
        }
        return this.trainDcsn;
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

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getUri() {
        return uri;
    }

 setUri( value) {
        this.uri = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "WarningCautionNote");
	}
};
