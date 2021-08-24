
module.exports = class PrerequisiteCompetenciesDefinition extends EcRemoteLinkedData {
iterId;
compDescr;
reqComp;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getIterId() {
        return iterId;
    }

 setIterId( value) {
        this.iterId = value;
    }

 getCompDescr() {
        if (compDescr == null) {
            compDescr = [];
        }
        return this.compDescr;
    }

 getReqComp() {
        if (reqComp == null) {
            reqComp = [];
        }
        return this.reqComp;
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
		super("http://www.asd-europe.org/s-series/s3000l", "PrerequisiteCompetenciesDefinition");
	}
};
