
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class BreakdownElementStructureReference extends EcRemoteLinkedData {
    uidRef;

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementStructureReference");
    }
};
