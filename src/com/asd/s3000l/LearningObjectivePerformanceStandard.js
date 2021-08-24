
module.exports = class LearningObjectivePerformanceStandard extends EcRemoteLinkedData {
cond;
action;
std;

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

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "LearningObjectivePerformanceStandard");
	}
};
