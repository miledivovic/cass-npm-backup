
module.exports = class AlgorithmDerivedTaskTrainLevel extends EcRemoteLinkedData {
taskDiff;
taskImp;
taskFreq;
taskTrainLvl;

 getTaskDiff() {
        return taskDiff;
    }

 setTaskDiff( value) {
        this.taskDiff = value;
    }

 getTaskImp() {
        return taskImp;
    }

 setTaskImp( value) {
        this.taskImp = value;
    }

 getTaskFreq() {
        return taskFreq;
    }

 setTaskFreq( value) {
        this.taskFreq = value;
    }

 getTaskTrainLvl() {
        return taskTrainLvl;
    }

 setTaskTrainLvl( value) {
        this.taskTrainLvl = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "AlgorithmDerivedTaskTrainLevel");
	}
};
