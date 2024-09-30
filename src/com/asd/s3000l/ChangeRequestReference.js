
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ChangeRequestReference extends EcRemoteLinkedData {
    crId;
    uidRef;

    getCrId() {
        return this.crId;
    }

    setCrId(value) {
        this.crId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ChangeRequestReference");
    }
};
