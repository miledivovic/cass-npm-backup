
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ConditionInstanceReference extends EcRemoteLinkedData {
    condName;
    condInstId;
    uidRef;

    getCondName() {
        return this.condName;
    }

    setCondName(value) {
        this.condName = value;
    }

    getCondInstId() {
        return this.condInstId;
    }

    setCondInstId(value) {
        this.condInstId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ConditionInstanceReference");
    }
};
