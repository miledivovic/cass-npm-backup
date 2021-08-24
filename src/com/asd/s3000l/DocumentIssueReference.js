
module.exports = class DocumentIssueReference extends EcRemoteLinkedData {
docId;
docIssId;
dmc;
dmIssId;
pmc;
pmIssId;
uidRef;

 getDocId() {
        return docId;
    }

 setDocId( value) {
        this.docId = value;
    }

 getDocIssId() {
        return docIssId;
    }

 setDocIssId( value) {
        this.docIssId = value;
    }

 getDmc() {
        return dmc;
    }

 setDmc( value) {
        this.dmc = value;
    }

 getDmIssId() {
        return dmIssId;
    }

 setDmIssId( value) {
        this.dmIssId = value;
    }

 getPmc() {
        return pmc;
    }

 setPmc( value) {
        this.pmc = value;
    }

 getPmIssId() {
        return pmIssId;
    }

 setPmIssId( value) {
        this.pmIssId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "DocumentIssueReference");
	}
};
