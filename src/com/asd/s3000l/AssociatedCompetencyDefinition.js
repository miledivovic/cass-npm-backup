
module.exports = class AssociatedCompetencyDefinition extends EcRemoteLinkedData {
obligCat;
compDef;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getObligCat() {
        return obligCat;
    }

 setObligCat( value) {
        this.obligCat = value;
    }

 getCompDef() {
        return compDef;
    }

 setCompDef( value) {
        this.compDef = value;
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
        if (crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "AssociatedCompetencyDefinition");
	}
};
