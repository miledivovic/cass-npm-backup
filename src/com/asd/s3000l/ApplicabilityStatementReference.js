
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ApplicabilityStatementReference extends EcRemoteLinkedData {
    applicId;
    uidRef;

    getApplicId() {
        return this.applicId;
    }

    setApplicId(value) {
        this.applicId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityStatementReference");
    }
};
