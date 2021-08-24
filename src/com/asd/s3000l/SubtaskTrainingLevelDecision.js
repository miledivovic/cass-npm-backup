
module.exports = class SubtaskTrainingLevelDecision extends EcRemoteLinkedData {
code;
applic;
docs;
rmks;

 getCode() {
        return code;
    }

 setCode( value) {
        this.code = value;
    }

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
    }

 getDocs() {
        return docs;
    }

 setDocs( value) {
        this.docs = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
    }

    Applic = class Applic {
applicDef;
datedApplicDef;
applicRef;

 getApplicDef() {
            return applicDef;
        }

 setApplicDef( value) {
            this.applicDef = value;
        }

 getDatedApplicDef() {
            return datedApplicDef;
        }

 setDatedApplicDef( value) {
            this.datedApplicDef = value;
        }

 getApplicRef() {
            return applicRef;
        }

 setApplicRef( value) {
            this.applicRef = value;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTrainingLevelDecision");
	}
};
