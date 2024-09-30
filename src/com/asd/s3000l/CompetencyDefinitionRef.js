
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class CompetencyDefinitionRef extends EcRemoteLinkedData {
    compId;
    uidRef;
    uriRef;

    getCompId() {
        return this.compId;
    }

    setCompId(value) {
        this.compId = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "CompetencyDefinitionRef");
    }
};
