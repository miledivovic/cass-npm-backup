

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class CircuitBreaker extends EcRemoteLinkedData {
    cbId;
    name;
    cbType;
    docs;
    rmks;
    uid;
    crud;

    getCbId() {
        return this.cbId;
    }

    setCbId(value) {
        this.cbId = value;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getCbType() {
        return this.cbType;
    }

    setCbType(value) {
        this.cbType = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "CircuitBreaker");
    }
};
