
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TrainingComponentLearningObjectiveDependency extends EcRemoteLinkedData {
    depType;
    loRef;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getDepType() {
        return this.depType;
    }

    setDepType(value) {
        this.depType = value;
    }

    getLoRef() {
        return this.loRef;
    }

    setLoRef(value) {
        this.loRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TrainingComponentLearningObjectiveDependency");
    }
};
