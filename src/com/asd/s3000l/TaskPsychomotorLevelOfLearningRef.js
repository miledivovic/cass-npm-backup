
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskPsychomotorLevelOfLearningRef extends EcRemoteLinkedData {
    trainTaskRef;
    trainSubtaskRef;
    trainStepRef;
    wcnRef;
    psychoIterId;
    uidRef;
    uriRef;

    getTrainTaskRef() {
        return this.trainTaskRef;
    }

    setTrainTaskRef(value) {
        this.trainTaskRef = value;
    }

    getTrainSubtaskRef() {
        return this.trainSubtaskRef;
    }

    setTrainSubtaskRef(value) {
        this.trainSubtaskRef = value;
    }

    getTrainStepRef() {
        return this.trainStepRef;
    }

    setTrainStepRef(value) {
        this.trainStepRef = value;
    }

    getWcnRef() {
        return this.wcnRef;
    }

    setWcnRef(value) {
        this.wcnRef = value;
    }

    getPsychoIterId() {
        return this.psychoIterId;
    }

    setPsychoIterId(value) {
        this.psychoIterId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    getUriRef() {
        return this.uriRef;
    }

    setUriRef(value) {
        this.uriRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskPsychomotorLevelOfLearningRef");
    }
};
