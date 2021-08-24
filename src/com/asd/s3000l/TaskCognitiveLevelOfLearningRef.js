
module.exports = class TaskCognitiveLevelOfLearningRef extends EcRemoteLinkedData {
trainTaskRef;
trainSubtaskRef;
trainStepRef;
wcnRef;
cognIterId;
uidRef;
uriRef;

 getTrainTaskRef() {
        return trainTaskRef;
    }

 setTrainTaskRef( value) {
        this.trainTaskRef = value;
    }

 getTrainSubtaskRef() {
        return trainSubtaskRef;
    }

 setTrainSubtaskRef( value) {
        this.trainSubtaskRef = value;
    }

 getTrainStepRef() {
        return trainStepRef;
    }

 setTrainStepRef( value) {
        this.trainStepRef = value;
    }

 getWcnRef() {
        return wcnRef;
    }

 setWcnRef( value) {
        this.wcnRef = value;
    }

 getCognIterId() {
        return cognIterId;
    }

 setCognIterId( value) {
        this.cognIterId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

 getUriRef() {
        return uriRef;
    }

 setUriRef( value) {
        this.uriRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskCognitiveLevelOfLearningRef");
	}
};
