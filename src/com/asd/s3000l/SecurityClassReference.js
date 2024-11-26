
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SecurityClassReference extends EcRemoteLinkedData {
    scc;
    uidRef;

    getScc() {
        return this.scc;
    }

    setScc(value) {
        this.scc = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "SecurityClassReference");
    }
};
