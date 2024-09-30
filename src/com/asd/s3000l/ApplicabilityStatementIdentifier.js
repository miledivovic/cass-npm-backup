
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ApplicabilityStatementIdentifier extends EcRemoteLinkedData {
    setBy;

    getSetBy() {
        return this.setBy;
    }

    setSetBy(value) {
        this.setBy = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityStatementIdentifier");
    }
};
