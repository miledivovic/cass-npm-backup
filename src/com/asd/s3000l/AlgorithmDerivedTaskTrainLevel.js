
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class AlgorithmDerivedTaskTrainLevel extends EcRemoteLinkedData {
    taskDiff;
    taskImp;
    taskFreq;
    taskTrainLvl;

    getTaskDiff() {
        return this.taskDiff;
    }

    setTaskDiff(value) {
        this.taskDiff = value;
    }

    getTaskImp() {
        return this.taskImp;
    }

    setTaskImp(value) {
        this.taskImp = value;
    }

    getTaskFreq() {
        return this.taskFreq;
    }

    setTaskFreq(value) {
        this.taskFreq = value;
    }

    getTaskTrainLvl() {
        return this.taskTrainLvl;
    }

    setTaskTrainLvl(value) {
        this.taskTrainLvl = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "AlgorithmDerivedTaskTrainLevel");
    }
};
