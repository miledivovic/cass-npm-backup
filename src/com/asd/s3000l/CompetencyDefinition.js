
module.exports = class CompetencyDefinition extends EcRemoteLinkedData {
compId;
compName;
compType;
compDescr;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getCompId() {
        return compId;
    }

 setCompId( value) {
        this.compId = value;
    }

 getCompName() {
        if (this.compName == null) {
            this.compName = [];
        }
        return this.compName;
    }

 getCompType() {
        return compType;
    }

 setCompType( value) {
        this.compType = value;
    }

 getCompDescr() {
        if (this.compDescr == null) {
            this.compDescr = [];
        }
        return this.compDescr;
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
		super("http://www.asd-europe.org/s-series/s3000l", "CompetencyDefinition");
	}
};
