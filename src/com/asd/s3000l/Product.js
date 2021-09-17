
module.exports = class Product extends EcRemoteLinkedData {
prodId;
name;
prodVar;
bkdns;
orgInfos;
docs;
rmks;
uid;
crud;

 getProdId() {
        if (this.prodId == null) {
            this.prodId = [];
        }
        return this.prodId;
    }

 getName() {
        if (this.name == null) {
            this.name = [];
        }
        return this.name;
    }

 getProdVar() {
        if (this.prodVar == null) {
            this.prodVar = [];
        }
        return this.prodVar;
    }

 getBkdns() {
        return bkdns;
    }

 setBkdns( value) {
        this.bkdns = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "Product");
	}
};
