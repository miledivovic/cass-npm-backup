
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class BreakdownElementRevisionReference extends EcRemoteLinkedData {
    beId;
    beRevId;
    uidRef;

    getBeId() {
        return this.beId;
    }

    setBeId(value) {
        this.beId = value;
    }

    getBeRevId() {
        return this.beRevId;
    }

    setBeRevId(value) {
        this.beRevId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementRevisionReference");
    }
};
