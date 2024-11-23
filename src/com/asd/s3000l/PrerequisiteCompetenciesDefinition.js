
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class PrerequisiteCompetenciesDefinition extends EcRemoteLinkedData {
    iterId;
    compDescr;
    reqComp;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getIterId() {
        return this.iterId;
    }

    setIterId(value) {
        this.iterId = value;
    }

    getCompDescr() {
        if (this.compDescr == null) {
            this.compDescr = [];
        }
        return this.compDescr;
    }

    getReqComp() {
        if (this.reqComp == null) {
            this.reqComp = [];
        }
        return this.reqComp;
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
        super("http://www.asd-europe.org/s-series/s3000l", "PrerequisiteCompetenciesDefinition");
    }
};
