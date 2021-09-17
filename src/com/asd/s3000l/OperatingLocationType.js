
module.exports = class OperatingLocationType extends EcRemoteLinkedData {
opTypeId;
name;
opTypeDescr;
nrOfLoc;
maintCap;
orgRef;
docs;
rmks;
uid;
crud;

 getOpTypeId() {
        return opTypeId;
    }

 setOpTypeId( value) {
        this.opTypeId = value;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
    }

 getOpTypeDescr() {
        return opTypeDescr;
    }

 setOpTypeDescr( value) {
        this.opTypeDescr = value;
    }

 getNrOfLoc() {
        return nrOfLoc;
    }

 setNrOfLoc( value) {
        this.nrOfLoc = value;
    }

 getMaintCap() {
        return maintCap;
    }

 setMaintCap( value) {
        this.maintCap = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "OperatingLocationType");
	}
};
