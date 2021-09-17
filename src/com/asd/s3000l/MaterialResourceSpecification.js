
module.exports = class MaterialResourceSpecification extends EcRemoteLinkedData {
resSpecId;
name;
resDescr;
partReal;
orgInfos;
docs;
rmks;
uid;
crud;

 getResSpecId() {
        return resSpecId;
    }

 setResSpecId( value) {
        this.resSpecId = value;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
    }

 getResDescr() {
        return resDescr;
    }

 setResDescr( value) {
        this.resDescr = value;
    }

 getPartReal() {
        if (this.partReal == null) {
            this.partReal = [];
        }
        return this.partReal;
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
		super("http://www.asd-europe.org/s-series/s3000l", "MaterialResourceSpecification");
	}
};
