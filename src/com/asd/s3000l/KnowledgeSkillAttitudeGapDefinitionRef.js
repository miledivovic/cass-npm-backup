
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class KnowledgeSkillAttitudeGapDefinitionRef extends EcRemoteLinkedData {
    gapId;
    uidRef;
    uriRef;

    getGapId() {
        return this.gapId;
    }

    setGapId(value) {
        this.gapId = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "KnowledgeSkillAttitudeGapDefinitionRef");
    }
};
