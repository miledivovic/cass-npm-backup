
module.exports = class TaskRequirementJustification extends EcRemoteLinkedData {
sEvntRef;
fmRef;
dmgRef;
analysisRef;
funcFailRef;
docs;
rmks;
uid;
crud;

 getSEvntRef() {
        return sEvntRef;
    }

 setSEvntRef( value) {
        this.sEvntRef = value;
    }

 getFmRef() {
        return fmRef;
    }

 setFmRef( value) {
        this.fmRef = value;
    }

 getDmgRef() {
        return dmgRef;
    }

 setDmgRef( value) {
        this.dmgRef = value;
    }

 getAnalysisRef() {
        return analysisRef;
    }

 setAnalysisRef( value) {
        this.analysisRef = value;
    }

 getFuncFailRef() {
        return funcFailRef;
    }

 setFuncFailRef( value) {
        this.funcFailRef = value;
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

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskRequirementJustification");
	}
};
