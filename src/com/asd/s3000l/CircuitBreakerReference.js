
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class CircuitBreakerReference extends EcRemoteLinkedData {
    cbId;
    uidRef;

    getCbId() {
        return this.cbId;
    }

    setCbId(value) {
        this.cbId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "CircuitBreakerReference");
    }
};
