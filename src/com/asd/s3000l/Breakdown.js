
module.exports = class Breakdown extends EcRemoteLinkedData {
bkdnType;
bkdnRev;
orgInfos;
docs;
rmks;
uid;
crud;

 getBkdnType() {
        return bkdnType;
    }

 setBkdnType( value) {
        this.bkdnType = value;
    }

 getBkdnRev() {
        if (bkdnRev == null) {
            bkdnRev = [];
        }
        return this.bkdnRev;
    }

 getOrgInfos() {
        return orgInfos;
    }

 setOrgInfos( value) {
        this.orgInfos = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "Breakdown");
	}
};
