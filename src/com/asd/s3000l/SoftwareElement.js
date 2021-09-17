
module.exports = class SoftwareElement extends EcRemoteLinkedData {
beId;
name;
esc;
beType;
beRev;
secs;
orgInfos;
docs;
rmks;
uid;
crud;

 getBeId() {
        if (this.beId == null) {
            this.beId = [];
        }
        return this.beId;
    }

 getName() {
        if (this.name == null) {
            this.name = [];
        }
        return this.name;
    }

 getEsc() {
        return esc;
    }

 setEsc( value) {
        this.esc = value;
    }

 getBeType() {
        return beType;
    }

 setBeType( value) {
        this.beType = value;
    }

 getBeRev() {
        if (this.beRev == null) {
            this.beRev = [];
        }
        return this.beRev;
    }

 getSecs() {
        return secs;
    }

 setSecs( value) {
        this.secs = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SoftwareElement");
	}
};
