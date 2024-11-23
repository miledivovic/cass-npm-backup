
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ProductUsagePhaseClass extends EcRemoteLinkedData {
    usagePhase;
    docs;
    rmks;
    uid;
    crud;

    getUsagePhase() {
        return this.usagePhase;
    }

    setUsagePhase(value) {
        this.usagePhase = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ProductUsagePhaseClass");
    }
};
