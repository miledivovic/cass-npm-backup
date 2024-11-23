
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ResourceSpecificationReference extends EcRemoteLinkedData {
    resSpecId;
    uidRef;

    getResSpecId() {
        return this.resSpecId;
    }

    setResSpecId(value) {
        this.resSpecId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ResourceSpecificationReference");
    }
};
