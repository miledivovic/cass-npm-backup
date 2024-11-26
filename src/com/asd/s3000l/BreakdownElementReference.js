
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class BreakdownElementReference extends EcRemoteLinkedData {
    beId;
    uidRef;
    uriRef;

    getBeId() {
        return this.beId;
    }

    setBeId(value) {
        this.beId = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementReference");
    }
};
