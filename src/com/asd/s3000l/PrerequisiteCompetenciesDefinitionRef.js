
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class PrerequisiteCompetenciesDefinitionRef extends EcRemoteLinkedData {
    skillRef;
    tradeRef;
    skillLevRef;
    jobPosRef;
    compId;
    uidRef;
    uriRef;

    getSkillRef() {
        return this.skillRef;
    }

    setSkillRef(value) {
        this.skillRef = value;
    }

    getTradeRef() {
        return this.tradeRef;
    }

    setTradeRef(value) {
        this.tradeRef = value;
    }

    getSkillLevRef() {
        return this.skillLevRef;
    }

    setSkillLevRef(value) {
        this.skillLevRef = value;
    }

    getJobPosRef() {
        return this.jobPosRef;
    }

    setJobPosRef(value) {
        this.jobPosRef = value;
    }

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
        super("http://www.asd-europe.org/s-series/s3000l", "PrerequisiteCompetenciesDefinitionRef");
    }
};
