
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskLevelOfLearningCharacteristics extends EcRemoteLinkedData {
    knowlLev;
    lolRtnle;
    iterRtnle;
    iterDate;

    getKnowlLev() {
        if (this.knowlLev == null) {
            this.knowlLev = [];
        }
        return this.knowlLev;
    }

    getLolRtnle() {
        if (this.lolRtnle == null) {
            this.lolRtnle = [];
        }
        return this.lolRtnle;
    }

    getIterRtnle() {
        if (this.iterRtnle == null) {
            this.iterRtnle = [];
        }
        return this.iterRtnle;
    }

    getIterDate() {
        return this.iterDate;
    }

    setIterDate(value) {
        this.iterDate = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskLevelOfLearningCharacteristics");
    }
};
