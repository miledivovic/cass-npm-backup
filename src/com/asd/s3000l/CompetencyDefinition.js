

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class CompetencyDefinition extends EcRemoteLinkedData {
    compId;
    compName;
    compType;
    compDescr;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getCompId() {
        return this.compId;
    }

    setCompId(value) {
        this.compId = value;
    }

    getCompName() {
        if (this.compName == null) {
            this.compName = [];
        }
        return this.compName;
    }

    getCompType() {
        return this.compType;
    }

    setCompType(value) {
        this.compType = value;
    }

    getCompDescr() {
        if (this.compDescr == null) {
            this.compDescr = [];
        }
        return this.compDescr;
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
        super("http://www.asd-europe.org/s-series/s3000l", "CompetencyDefinition");
    }
};
