
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class WarningCautionNoteRef extends EcRemoteLinkedData {
    wcnId;
    uidRef;

    getWcnId() {
        return this.wcnId;
    }

    setWcnId(value) {
        this.wcnId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "WarningCautionNoteRef");
    }
};
