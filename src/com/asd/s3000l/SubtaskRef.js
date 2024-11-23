
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubtaskRef extends EcRemoteLinkedData {
    taskId;
    taskRevId;
    subtId;
    uidRef;

    getTaskId() {
        return this.taskId;
    }

    setTaskId(value) {
        this.taskId = value;
    }

    getTaskRevId() {
        return this.taskRevId;
    }

    setTaskRevId(value) {
        this.taskRevId = value;
    }

    getSubtId() {
        return this.subtId;
    }

    setSubtId(value) {
        this.subtId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "SubtaskRef");
    }
};
