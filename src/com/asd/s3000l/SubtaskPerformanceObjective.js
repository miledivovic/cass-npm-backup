
module.exports = class SubtaskPerformanceObjective extends EcRemoteLinkedData {
cond;
action;
std;
poStmnt;
applic;

 getCond() {
        if (cond == null) {
            cond = [];
        }
        return this.cond;
    }

 getAction() {
        if (action == null) {
            action = [];
        }
        return this.action;
    }

 getStd() {
        if (std == null) {
            std = [];
        }
        return this.std;
    }

 getPoStmnt() {
        if (poStmnt == null) {
            poStmnt = [];
        }
        return this.poStmnt;
    }

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskPerformanceObjective");
	}
};
