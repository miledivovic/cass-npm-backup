
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class MaintenanceLocation extends EcRemoteLinkedData {
    mLocId;
    name;
    mLocDescr;
    maintCap;
    opers;
    docs;
    rmks;
    uid;
    crud;

    getMLocId() {
        return this.mLocId;
    }

    setMLocId(value) {
        this.mLocId = value;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getMLocDescr() {
        return this.mLocDescr;
    }

    setMLocDescr(value) {
        this.mLocDescr = value;
    }

    getMaintCap() {
        return this.maintCap;
    }

    setMaintCap(value) {
        this.maintCap = value;
    }

    getOpers() {
        if (this.opers == null) {
            this.opers = [];
        }
        return this.opers;
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
        super("http://www.asd-europe.org/s-series/s3000l", "MaintenanceLocation");
    }
};
