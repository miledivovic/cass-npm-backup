

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class BreakdownElementRevisionRelationship extends EcRemoteLinkedData {
    relType;
    beRef;
    rmks;
    uid;
    crud;

    getRelType() {
        return this.relType;
    }

    setRelType(value) {
        this.relType = value;
    }

    getBeRef() {
        return this.beRef;
    }

    setBeRef(value) {
        this.beRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementRevisionRelationship");
    }
};
