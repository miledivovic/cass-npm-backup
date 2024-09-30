
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class LearningAssessmentName extends EcRemoteLinkedData {
    name;
    lang;
    providedBy;

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getLang() {
        return this.lang;
    }

    setLang(value) {
        this.lang = value;
    }

    getProvidedBy() {
        return this.providedBy;
    }

    setProvidedBy(value) {
        this.providedBy = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "LearningAssessmentName");
    }
};
