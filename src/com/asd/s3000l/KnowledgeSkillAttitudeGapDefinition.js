
module.exports = class KnowledgeSkillAttitudeGapDefinition extends EcRemoteLinkedData {
gapId;
gapIter;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getGapId() {
        return gapId;
    }

 setGapId( value) {
        this.gapId = value;
    }

 getGapIter() {
        if (gapIter == null) {
            gapIter = [];
        }
        return this.gapIter;
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
		super("http://www.asd-europe.org/s-series/s3000l", "KnowledgeSkillAttitudeGapDefinition");
	}
};
