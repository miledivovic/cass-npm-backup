
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class LearningAssessment extends EcRemoteLinkedData {
    assmentName;
    assmentDescr;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getAssmentName() {
        if (this.assmentName == null) {
            this.assmentName = [];
        }
        return this.assmentName;
    }

    getAssmentDescr() {
        if (this.assmentDescr == null) {
            this.assmentDescr = [];
        }
        return this.assmentDescr;
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
        super("http://www.asd-europe.org/s-series/s3000l", "LearningAssessment");
    }
};
