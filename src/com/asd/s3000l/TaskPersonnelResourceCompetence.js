
module.exports = class TaskPersonnelResourceCompetence extends EcRemoteLinkedData {
addTrain;
tradeRef;
skillLevelRef;
skillRef;
jobPosRef;
applic;
uid;
crud;

 getAddTrain() {
        if (addTrain == null) {
            addTrain = [];
        }
        return this.addTrain;
    }

 getTradeRef() {
        return tradeRef;
    }

 setTradeRef( value) {
        this.tradeRef = value;
    }

 getSkillLevelRef() {
        return skillLevelRef;
    }

 setSkillLevelRef( value) {
        this.skillLevelRef = value;
    }

 getSkillRef() {
        return skillRef;
    }

 setSkillRef( value) {
        this.skillRef = value;
    }

 getJobPosRef() {
        return jobPosRef;
    }

 setJobPosRef( value) {
        this.jobPosRef = value;
    }

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
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

    AddTrain = class AddTrain {
trainDescr;
trainMeth;
docs;
rmks;

 getTrainDescr() {
            return trainDescr;
        }

 setTrainDescr( value) {
            this.trainDescr = value;
        }

 getTrainMeth() {
            return trainMeth;
        }

 setTrainMeth( value) {
            this.trainMeth = value;
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
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskPersonnelResourceCompetence");
	}
};
