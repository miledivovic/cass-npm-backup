
module.exports = class Project extends EcRemoteLinkedData {
projId;
name;
orgInfos;
docs;
rmks;
uid;
crud;

 getProjId() {
        if (this.projId == null) {
            this.projId = [];
        }
        return this.projId;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "Project");
	}
};
