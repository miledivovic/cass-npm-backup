
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class LearningObjectiveRef extends EcRemoteLinkedData {
    loId;
    uidRef;
    uriRef;

    getLoId() {
        return this.loId;
    }

    setLoId(value) {
        this.loId = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "LearningObjectiveRef");
    }
};
