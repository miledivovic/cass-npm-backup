
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskMaterialResourceByReference extends EcRemoteLinkedData {
    fixed;
    duration;
    qty;
    cat;
    relRes;
    beRef;
    partRef;
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

    getCat() {
        return this.cat;
    }

    setCat(value) {
        this.cat = value;
    }

    getRelRes() {
        if (this.relRes == null) {
            this.relRes = [];
        }
        return this.relRes;
    }

    getBeRef() {
        return this.beRef;
    }

    setBeRef(value) {
        this.beRef = value;
    }

    getPartRef() {
        return this.partRef;
    }

    setPartRef(value) {
        this.partRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TaskMaterialResourceByReference");
    }
};
