

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class BreakdownElementStructureRelationship extends EcRemoteLinkedData {
    relType;
    elemRef;
    rmks;
    uid;
    crud;

    getRelType() {
        return this.relType;
    }

    setRelType(value) {
        this.relType = value;
    }

    getElemRef() {
        return this.elemRef;
    }

    setElemRef(value) {
        this.elemRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementStructureRelationship");
    }
};
