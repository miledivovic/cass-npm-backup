
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OperatingLocationReference extends EcRemoteLinkedData {
    opLocId;
    uidRef;

    getOpLocId() {
        return this.opLocId;
    }

    setOpLocId(value) {
        this.opLocId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "OperatingLocationReference");
    }
};
