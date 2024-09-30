
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SkillReference extends EcRemoteLinkedData {
    skillCode;
    uidRef;
    uriRef;

    getSkillCode() {
        return this.skillCode;
    }

    setSkillCode(value) {
        this.skillCode = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SkillReference");
    }
};
