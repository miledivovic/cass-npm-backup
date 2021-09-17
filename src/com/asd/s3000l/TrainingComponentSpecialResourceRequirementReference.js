
module.exports = class TrainingComponentSpecialResourceRequirementReference extends EcRemoteLinkedData {
refType;
prodRef;
prodVarRef;
partRef;
beRef;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getRefType() {
        return refType;
    }

 setRefType( value) {
        this.refType = value;
    }

 getProdRef() {
        return prodRef;
    }

 setProdRef( value) {
        this.prodRef = value;
    }

 getProdVarRef() {
        return prodVarRef;
    }

 setProdVarRef( value) {
        this.prodVarRef = value;
    }

 getPartRef() {
        return partRef;
    }

 setPartRef( value) {
        this.partRef = value;
    }

 getBeRef() {
        return beRef;
    }

 setBeRef( value) {
        this.beRef = value;
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

 getUri() {
        return uri;
    }

 setUri( value) {
        this.uri = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TrainingComponentSpecialResourceRequirementReference");
	}
};
