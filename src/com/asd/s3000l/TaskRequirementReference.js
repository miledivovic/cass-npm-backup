
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskRequirementReference extends EcRemoteLinkedData {
    trId;
    uidRef;

    getTrId() {
        return this.trId;
    }

    setTrId(value) {
        this.trId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskRequirementReference");
    }
};
