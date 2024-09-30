
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubtaskStepPerformanceStandard extends EcRemoteLinkedData {
    cond;
    action;
    std;
    poStmnt;
    applic;

    getCond() {
        if (this.cond == null) {
            this.cond = [];
        }
        return this.cond;
    }

    getAction() {
        if (this.action == null) {
            this.action = [];
        }
        return this.action;
    }

    getStd() {
        if (this.std == null) {
            this.std = [];
        }
        return this.std;
    }

    getPoStmnt() {
        if (this.poStmnt == null) {
            this.poStmnt = [];
        }
        return this.poStmnt;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "SubtaskStepPerformanceStandard");
    }
};
