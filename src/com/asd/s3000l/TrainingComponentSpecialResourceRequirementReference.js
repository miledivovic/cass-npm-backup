
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TrainingComponentSpecialResourceRequirementReference extends EcRemoteLinkedData {
    refType;
    prodRef;
    prodVarRef;
    partRef;
    beRef;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getRefType() {
        return this.refType;
    }

    setRefType(value) {
        this.refType = value;
    }

    getProdRef() {
        return this.prodRef;
    }

    setProdRef(value) {
        this.prodRef = value;
    }

    getProdVarRef() {
        return this.prodVarRef;
    }

    setProdVarRef(value) {
        this.prodVarRef = value;
    }

    getPartRef() {
        return this.partRef;
    }

    setPartRef(value) {
        this.partRef = value;
    }

    getBeRef() {
        return this.beRef;
    }

    setBeRef(value) {
        this.beRef = value;
    }

    getOrgInfos() {
        return this.orgInfos;
    }

    setOrgInfos(value) {
        this.orgInfos = value;
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

    getUri() {
        return this.uri;
    }

    setUri(value) {
        this.uri = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TrainingComponentSpecialResourceRequirementReference");
    }
};
