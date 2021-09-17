
module.exports = class Organization extends EcRemoteLinkedData {
orgId;
name;
docs;
rmks;
uid;
crud;

 getOrgId() {
        if (this.orgId == null) {
            this.orgId = [];
        }
        return this.orgId;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "Organization");
	}
};
