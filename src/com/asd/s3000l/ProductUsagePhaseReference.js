
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ProductUsagePhaseReference extends EcRemoteLinkedData {
    usagePhase;
    uidRef;

    getUsagePhase() {
        return this.usagePhase;
    }

    setUsagePhase(value) {
        this.usagePhase = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ProductUsagePhaseReference");
    }
};
