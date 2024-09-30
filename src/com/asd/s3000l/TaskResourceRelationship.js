
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskResourceRelationship extends EcRemoteLinkedData {
    relType;
    resRef;
    rmks;
    applic;
    uid;
    crud;

    getRelType() {
        return this.relType;
    }

    setRelType(value) {
        this.relType = value;
    }

    getResRef() {
        return this.resRef;
    }

    setResRef(value) {
        this.resRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TaskResourceRelationship");
    }
};
