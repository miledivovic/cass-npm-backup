
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskKnowledgeSkillAttitudeGapRef extends EcRemoteLinkedData {
    taskAffLoLRef;
    taskCognLoLRef;
    taskPsychLoLRef;
    taskKSAGapId;
    uidRef;
    uriRef;

    getTaskAffLoLRef() {
        return this.taskAffLoLRef;
    }

    setTaskAffLoLRef(value) {
        this.taskAffLoLRef = value;
    }

    getTaskCognLoLRef() {
        return this.taskCognLoLRef;
    }

    setTaskCognLoLRef(value) {
        this.taskCognLoLRef = value;
    }

    getTaskPsychLoLRef() {
        return this.taskPsychLoLRef;
    }

    setTaskPsychLoLRef(value) {
        this.taskPsychLoLRef = value;
    }

    getTaskKSAGapId() {
        return this.taskKSAGapId;
    }

    setTaskKSAGapId(value) {
        this.taskKSAGapId = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TaskKnowledgeSkillAttitudeGapRef");
    }
};
