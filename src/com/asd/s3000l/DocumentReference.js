
module.exports = class DocumentReference extends EcRemoteLinkedData {
docId;
dmc;
pmc;
uidRef;

 getDocId() {
        return docId;
    }

 setDocId( value) {
        this.docId = value;
    }

 getDmc() {
        return dmc;
    }

 setDmc( value) {
        this.dmc = value;
    }

 getPmc() {
        return pmc;
    }

 setPmc( value) {
        this.pmc = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "DocumentReference");
	}
};
