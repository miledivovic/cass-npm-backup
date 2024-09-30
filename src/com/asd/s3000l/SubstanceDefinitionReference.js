
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubstanceDefinitionReference extends EcRemoteLinkedData {
    subsId;
    uidRef;

    getSubsId() {
        return this.subsId;
    }

    setSubsId(value) {
        this.subsId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "SubstanceDefinitionReference");
    }
};
