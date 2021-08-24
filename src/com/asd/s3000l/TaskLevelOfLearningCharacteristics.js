
module.exports = class TaskLevelOfLearningCharacteristics extends EcRemoteLinkedData {
knowlLev;
lolRtnle;
iterRtnle;
iterDate;

 getKnowlLev() {
        if (knowlLev == null) {
            knowlLev = [];
        }
        return this.knowlLev;
    }

 getLolRtnle() {
        if (lolRtnle == null) {
            lolRtnle = [];
        }
        return this.lolRtnle;
    }

 getIterRtnle() {
        if (iterRtnle == null) {
            iterRtnle = [];
        }
        return this.iterRtnle;
    }

 getIterDate() {
        return iterDate;
    }

 setIterDate( value) {
        this.iterDate = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskLevelOfLearningCharacteristics");
	}
};
