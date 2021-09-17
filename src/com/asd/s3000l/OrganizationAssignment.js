
module.exports = class OrganizationAssignment extends EcRemoteLinkedData {
orgRole;
orgRef;
docs;
rmks;
applic;
uid;
crud;

 getOrgRole() {
        return orgRole;
    }

 setOrgRole( value) {
        this.orgRole = value;
    }

 getOrgRef() {
        return orgRef;
    }

 setOrgRef( value) {
        this.orgRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "OrganizationAssignment");
	}
};
