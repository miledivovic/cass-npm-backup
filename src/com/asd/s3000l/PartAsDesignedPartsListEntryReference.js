
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class PartAsDesignedPartsListEntryReference extends EcRemoteLinkedData {
    partId;
    pListType;
    pListRevId;
    posId;
    uidRef;

    getPartId() {
        return this.partId;
    }

    setPartId(value) {
        this.partId = value;
    }

    getPListType() {
        return this.pListType;
    }

    setPListType(value) {
        this.pListType = value;
    }

    getPListRevId() {
        return this.pListRevId;
    }

    setPListRevId(value) {
        this.pListRevId = value;
    }

    getPosId() {
        return this.posId;
    }

    setPosId(value) {
        this.posId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "PartAsDesignedPartsListEntryReference");
    }
};
