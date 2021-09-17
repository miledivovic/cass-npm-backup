
module.exports = class MaintenanceLocation extends EcRemoteLinkedData {
mLocId;
name;
mLocDescr;
maintCap;
opers;
docs;
rmks;
uid;
crud;

 getMLocId() {
        return mLocId;
    }

 setMLocId( value) {
        this.mLocId = value;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
    }

 getMLocDescr() {
        return mLocDescr;
    }

 setMLocDescr( value) {
        this.mLocDescr = value;
    }

 getMaintCap() {
        return maintCap;
    }

 setMaintCap( value) {
        this.maintCap = value;
    }

 getOpers() {
        if (this.opers == null) {
            this.opers = [];
        }
        return this.opers;
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
		super("http://www.asd-europe.org/s-series/s3000l", "MaintenanceLocation");
	}
};
