
module.exports = class Skill extends EcRemoteLinkedData {
skillCode;
trainPopDef;
ksaGaps;
orgInfos;
docs;
rmks;
uid;
crud;

 getSkillCode() {
        return skillCode;
    }

 setSkillCode( value) {
        this.skillCode = value;
    }

 getTrainPopDef() {
        return trainPopDef;
    }

 setTrainPopDef( value) {
        this.trainPopDef = value;
    }

 getKsaGaps() {
        return ksaGaps;
    }

 setKsaGaps( value) {
        this.ksaGaps = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "Skill");
	}
};
