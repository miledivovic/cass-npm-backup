

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class BreakdownElementUsageInBreakdown extends EcRemoteLinkedData {
    beRef;
    beChild;
    inZone;
    usableOnList;
    rmks;
    uid;
    crud;

    getBeRef() {
        return this.beRef;
    }

    setBeRef(value) {
        this.beRef = value;
    }

    getBeChild() {
        if (this.beChild == null) {
            this.beChild = [];
        }
        return this.beChild;
    }

    getInZone() {
        return this.inZone;
    }

    setInZone(value) {
        this.inZone = value;
    }

    getUsableOnList() {
        return this.usableOnList;
    }

    setUsableOnList(value) {
        this.usableOnList = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementUsageInBreakdown");
    }
};
