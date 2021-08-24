
module.exports = class ExternalDocumentIssue extends EcRemoteLinkedData {
docIssId;
issDate;
rmks;
uid;
crud;

 getDocIssId() {
        return docIssId;
    }

 setDocIssId( value) {
        this.docIssId = value;
    }

 getIssDate() {
        return issDate;
    }

 setIssDate( value) {
        this.issDate = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ExternalDocumentIssue");
	}
};
