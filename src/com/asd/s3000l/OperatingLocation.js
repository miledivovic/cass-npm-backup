
module.exports = class OperatingLocation extends EcRemoteLinkedData {
opLocId;
name;
opLocDescr;
opCap;
orgRef;
docs;
rmks;
uid;
crud;

 getOpLocId() {
        return opLocId;
    }

 setOpLocId( value) {
        this.opLocId = value;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
    }

 getOpLocDescr() {
        return opLocDescr;
    }

 setOpLocDescr( value) {
        this.opLocDescr = value;
    }

 getOpCap() {
        return opCap;
    }

 setOpCap( value) {
        this.opCap = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "OperatingLocation");
	}
};
