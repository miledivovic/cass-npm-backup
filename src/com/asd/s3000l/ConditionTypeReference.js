
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ConditionTypeReference extends EcRemoteLinkedData {
    condName;
    uidRef;

    getCondName() {
        return this.condName;
    }

    setCondName(value) {
        this.condName = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ConditionTypeReference");
    }
};
