
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class KnowledgeSkillAttitudeRequirementItem extends EcRemoteLinkedData {
    affLoL;
    cognLoL;
    psychLoL;
    tradeRef;
    skillLevelRef;
    skillRef;
    jobPosRef;

    getAffLoL() {
        if (this.affLoL == null) {
            this.affLoL = [];
        }
        return this.affLoL;
    }

    getCognLoL() {
        if (this.cognLoL == null) {
            this.cognLoL = [];
        }
        return this.cognLoL;
    }

    getPsychLoL() {
        if (this.psychLoL == null) {
            this.psychLoL = [];
        }
        return this.psychLoL;
    }

    getTradeRef() {
        return this.tradeRef;
    }

    setTradeRef(value) {
        this.tradeRef = value;
    }

    getSkillLevelRef() {
        return this.skillLevelRef;
    }

    setSkillLevelRef(value) {
        this.skillLevelRef = value;
    }

    getSkillRef() {
        return this.skillRef;
    }

    setSkillRef(value) {
        this.skillRef = value;
    }

    getJobPosRef() {
        return this.jobPosRef;
    }

    setJobPosRef(value) {
        this.jobPosRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "KnowledgeSkillAttitudeRequirementItem");
    }
};
