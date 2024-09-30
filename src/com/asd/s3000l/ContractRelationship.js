

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ContractRelationship extends EcRemoteLinkedData {
    relType;
    contrRef;
    rmks;
    uid;
    crud;

    getRelType() {
        return this.relType;
    }

    setRelType(value) {
        this.relType = value;
    }

    getContrRef() {
        return this.contrRef;
    }

    setContrRef(value) {
        this.contrRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ContractRelationship");
    }
};
