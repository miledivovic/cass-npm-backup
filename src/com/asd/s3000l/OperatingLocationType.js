
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OperatingLocationType extends EcRemoteLinkedData {
    opTypeId;
    name;
    opTypeDescr;
    nrOfLoc;
    maintCap;
    orgRef;
    docs;
    rmks;
    uid;
    crud;

    getOpTypeId() {
        return this.opTypeId;
    }

    setOpTypeId(value) {
        this.opTypeId = value;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getOpTypeDescr() {
        return this.opTypeDescr;
    }

    setOpTypeDescr(value) {
        this.opTypeDescr = value;
    }

    getNrOfLoc() {
        return this.nrOfLoc;
    }

    setNrOfLoc(value) {
        this.nrOfLoc = value;
    }

    getMaintCap() {
        return this.maintCap;
    }

    setMaintCap(value) {
        this.maintCap = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "OperatingLocationType");
    }
};
