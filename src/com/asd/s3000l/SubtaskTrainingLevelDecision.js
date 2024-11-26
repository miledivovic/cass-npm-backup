
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubtaskTrainingLevelDecision extends EcRemoteLinkedData {
    code;
    applic;
    docs;
    rmks;

    getCode() {
        return this.code;
    }

    setCode(value) {
        this.code = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
    }

    getDocs() {
        return this.docs;
    }

    setDocs(value) {
        this.docs = value;
    }

    getRmks() {
        return this.rmks;
    }

    setRmks(value) {
        this.rmks = value;
    }

    Applic = class Applic {
        applicDef;
        datedApplicDef;
        applicRef;

        getApplicDef() {
            return this.applicDef;
        }

        setApplicDef(value) {
            this.applicDef = value;
        }

        getDatedApplicDef() {
            return this.datedApplicDef;
        }

        setDatedApplicDef(value) {
            this.datedApplicDef = value;
        }

        getApplicRef() {
            return this.applicRef;
        }

        setApplicRef(value) {
            this.applicRef = value;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTrainingLevelDecision");
    }
};
