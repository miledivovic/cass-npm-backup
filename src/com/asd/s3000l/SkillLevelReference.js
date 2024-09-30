
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SkillLevelReference extends EcRemoteLinkedData {
    tradeName;
    skillLevName;
    uidRef;
    uriRef;

    getTradeName() {
        return this.tradeName;
    }

    setTradeName(value) {
        this.tradeName = value;
    }

    getSkillLevName() {
        return this.skillLevName;
    }

    setSkillLevName(value) {
        this.skillLevName = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SkillLevelReference");
    }
};
