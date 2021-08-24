
module.exports = class ExternalDocument extends EcRemoteLinkedData {
docId;
docTitle;
docType;
docLoc;
docIss;
orgInfos;
rmks;
uid;
crud;

 getDocId() {
        if (docId == null) {
            docId = [];
        }
        return this.docId;
    }

 getDocTitle() {
        return docTitle;
    }

 setDocTitle( value) {
        this.docTitle = value;
    }

 getDocType() {
        return docType;
    }

 setDocType( value) {
        this.docType = value;
    }

 getDocLoc() {
        return docLoc;
    }

 setDocLoc( value) {
        this.docLoc = value;
    }

 getDocIss() {
        if (docIss == null) {
            docIss = [];
        }
        return this.docIss;
    }

 getOrgInfos() {
        return orgInfos;
    }

 setOrgInfos( value) {
        this.orgInfos = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ExternalDocument");
	}
};
