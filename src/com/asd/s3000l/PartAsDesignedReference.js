
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class PartAsDesignedReference extends EcRemoteLinkedData {
    partId;
    uidRef;
    uriRef;

    getPartId() {
        return this.partId;
    }

    setPartId(value) {
        this.partId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    getUriRef() {
        return this.uriRef;
    }

    setUriRef(value) {
        this.uriRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "PartAsDesignedReference");
    }
};
