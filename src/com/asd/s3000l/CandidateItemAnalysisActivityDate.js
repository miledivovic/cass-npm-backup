
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class CandidateItemAnalysisActivityDate extends EcRemoteLinkedData {
    date;

    getDate() {
        return this.date;
    }

    setDate(value) {
        this.date = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "CandidateItemAnalysisActivityDate");
    }
};
