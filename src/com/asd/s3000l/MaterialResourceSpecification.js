
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class MaterialResourceSpecification extends EcRemoteLinkedData {
    resSpecId;
    name;
    resDescr;
    partReal;
    orgInfos;
    docs;
    rmks;
    uid;
    crud;

    getResSpecId() {
        return this.resSpecId;
    }

    setResSpecId(value) {
        this.resSpecId = value;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getResDescr() {
        return this.resDescr;
    }

    setResDescr(value) {
        this.resDescr = value;
    }

    getPartReal() {
        if (this.partReal == null) {
            this.partReal = [];
        }
        return this.partReal;
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
        super("http://www.asd-europe.org/s-series/s3000l", "MaterialResourceSpecification");
    }
};
