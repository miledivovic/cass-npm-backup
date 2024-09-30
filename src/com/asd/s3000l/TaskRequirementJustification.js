
const CrudCodeValues = require("./CrudCodeValues");
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
        return this.sEvntRef;
    }

    setSEvntRef(value) {
        this.sEvntRef = value;
    }

    getFmRef() {
        return this.fmRef;
    }

    setFmRef(value) {
        this.fmRef = value;
    }

    getDmgRef() {
        return this.dmgRef;
    }

    setDmgRef(value) {
        this.dmgRef = value;
    }

    getAnalysisRef() {
        return this.analysisRef;
    }

    setAnalysisRef(value) {
        this.analysisRef = value;
    }

    getFuncFailRef() {
        return this.funcFailRef;
    }

    setFuncFailRef(value) {
        this.funcFailRef = value;
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

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
    }

    getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return this.crud;
        }
    }

    setCrud(value) {
        this.crud = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskRequirementJustification");
    }
};
