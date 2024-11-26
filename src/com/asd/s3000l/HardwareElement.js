
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class HardwareElement extends EcRemoteLinkedData {
    beId;
    name;
    esc;
    beType;
    beRev;
    secs;
    orgInfos;
    docs;
    rmks;
    uid;
    crud;

    getBeId() {
        if (this.beId == null) {
            this.beId = [];
        }
        return this.beId;
    }

    getName() {
        if (this.name == null) {
            this.name = [];
        }
        return this.name;
    }

    getEsc() {
        return this.esc;
    }

    setEsc(value) {
        this.esc = value;
    }

    getBeType() {
        return this.beType;
    }

    setBeType(value) {
        this.beType = value;
    }

    getBeRev() {
        if (this.beRev == null) {
            this.beRev = [];
        }
        return this.beRev;
    }

    getSecs() {
        return this.secs;
    }

    setSecs(value) {
        this.secs = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "HardwareElement");
    }
};
