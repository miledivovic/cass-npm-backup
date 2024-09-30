
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OperatingLocationTypeReference extends EcRemoteLinkedData {
    opTypeId;
    uidRef;

    getOpTypeId() {
        return this.opTypeId;
    }

    setOpTypeId(value) {
        this.opTypeId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "OperatingLocationTypeReference");
    }
};
