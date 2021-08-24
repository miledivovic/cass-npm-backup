
module.exports = class SkillLevel extends EcRemoteLinkedData {
skillLevName;
skillLevDescr;
trainPopDef;
ksaGaps;
docs;
rmks;
uid;
crud;

 getSkillLevName() {
        return skillLevName;
    }

 setSkillLevName( value) {
        this.skillLevName = value;
    }

 getSkillLevDescr() {
        return skillLevDescr;
    }

 setSkillLevDescr( value) {
        this.skillLevDescr = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SkillLevel");
	}
};
