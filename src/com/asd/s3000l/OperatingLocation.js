
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OperatingLocation extends EcRemoteLinkedData {
    opLocId;
    name;
    opLocDescr;
    opCap;
    orgRef;
    docs;
    rmks;
    uid;
    crud;

    getOpLocId() {
        return this.opLocId;
    }

    setOpLocId(value) {
        this.opLocId = value;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getOpLocDescr() {
        return this.opLocDescr;
    }

    setOpLocDescr(value) {
        this.opLocDescr = value;
    }

    getOpCap() {
        return this.opCap;
    }

    setOpCap(value) {
        this.opCap = value;
    }

    getOrgRef() {
        return this.orgRef;
    }

    setOrgRef(value) {
        this.orgRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "OperatingLocation");
    }
};
