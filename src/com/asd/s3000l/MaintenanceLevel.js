
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class MaintenanceLevel extends EcRemoteLinkedData {
    mlvId;
    name;
    mlvCapDescr;
    opers;
    docs;
    rmks;
    uid;
    crud;

    getMlvId() {
        return this.mlvId;
    }

    setMlvId(value) {
        this.mlvId = value;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getMlvCapDescr() {
        return this.mlvCapDescr;
    }

    setMlvCapDescr(value) {
        this.mlvCapDescr = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "MaintenanceLevel");
    }
};
