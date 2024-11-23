

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class AllocatedMaintenanceLevel extends EcRemoteLinkedData {
    opLocRef;
    opTypeRef;
    mlvRef;
    mLocRef;
    rmks;
    applic;
    uid;
    crud;

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

    getRmks() {
        return this.rmks;
    }

    setRmks(value) {
        this.rmks = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "AllocatedMaintenanceLevel");
    }
};
