
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskFacilityResourceBySpecification extends EcRemoteLinkedData {
    fixed;
    duration;
    qty;
    relRes;
    specRef;
    docs;
    rmks;
    applic;
    uid;
    crud;

    getFixed() {
        return this.fixed;
    }

    setFixed(value) {
        this.fixed = value;
    }

    getDuration() {
        if (this.duration == null) {
            this.duration = [];
        }
        return this.duration;
    }

    getQty() {
        return this.qty;
    }

    setQty(value) {
        this.qty = value;
    }

    getRelRes() {
        if (this.relRes == null) {
            this.relRes = [];
        }
        return this.relRes;
    }

    getSpecRef() {
        return this.specRef;
    }

    setSpecRef(value) {
        this.specRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TaskFacilityResourceBySpecification");
    }
};
