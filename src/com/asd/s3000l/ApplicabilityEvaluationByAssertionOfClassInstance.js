

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ApplicabilityEvaluationByAssertionOfClassInstance extends EcRemoteLinkedData {
    prodVarRef;
    hwElemRealRef;
    swElemRealRef;
    orgRef;
    opLocRef;
    opTypeRef;
    mlvRef;
    mLocRef;
    beRef;
    usagePhaseRef;
    contrRef;
    partRef;
    prodConfRef;
    rmks;
    uid;
    crud;

    getProdVarRef() {
        return this.prodVarRef;
    }

    setProdVarRef(value) {
        this.prodVarRef = value;
    }

    getHwElemRealRef() {
        return this.hwElemRealRef;
    }

    setHwElemRealRef(value) {
        this.hwElemRealRef = value;
    }

    getSwElemRealRef() {
        return this.swElemRealRef;
    }

    setSwElemRealRef(value) {
        this.swElemRealRef = value;
    }

    getOrgRef() {
        return this.orgRef;
    }

    setOrgRef(value) {
        this.orgRef = value;
    }

    getOpLocRef() {
        return this.opLocRef;
    }

    setOpLocRef(value) {
        this.opLocRef = value;
    }

    getOpTypeRef() {
        return this.opTypeRef;
    }

    setOpTypeRef(value) {
        this.opTypeRef = value;
    }

    getMlvRef() {
        return this.mlvRef;
    }

    setMlvRef(value) {
        this.mlvRef = value;
    }

    getMLocRef() {
        return this.mLocRef;
    }

    setMLocRef(value) {
        this.mLocRef = value;
    }

    getBeRef() {
        return this.beRef;
    }

    setBeRef(value) {
        this.beRef = value;
    }

    getUsagePhaseRef() {
        return this.usagePhaseRef;
    }

    setUsagePhaseRef(value) {
        this.usagePhaseRef = value;
    }

    getContrRef() {
        return this.contrRef;
    }

    setContrRef(value) {
        this.contrRef = value;
    }

    getPartRef() {
        return this.partRef;
    }

    setPartRef(value) {
        this.partRef = value;
    }

    getProdConfRef() {
        return this.prodConfRef;
    }

    setProdConfRef(value) {
        this.prodConfRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityEvaluationByAssertionOfClassInstance");
    }
};
