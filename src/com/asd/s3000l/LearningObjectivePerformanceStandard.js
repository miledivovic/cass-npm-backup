
module.exports = class LearningObjectivePerformanceStandard extends EcRemoteLinkedData {
cond;
action;
std;

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

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "LearningObjectivePerformanceStandard");
	}
};
