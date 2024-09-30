
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskRequirementTarget extends EcRemoteLinkedData {
    taskReqRef;
    timeLimits;
    uid;
    crud;

    getTaskReqRef() {
        return this.taskReqRef;
    }

    setTaskReqRef(value) {
        this.taskReqRef = value;
    }

    getTimeLimits() {
        return this.timeLimits;
    }

    setTimeLimits(value) {
        this.timeLimits = value;
    }

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
    }

    getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return this.crud;
        }
    }

    setCrud(value) {
        this.crud = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskRequirementTarget");
    }
};
