

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ContractedProductVariantAtOperatingLocationType extends EcRemoteLinkedData {
    qty;
    opReq;
    theaterOfOp;
    rmks;
    uid;
    crud;

    getQty() {
        return this.qty;
    }

    setQty(value) {
        this.qty = value;
    }

    getOpReq() {
        return this.opReq;
    }

    setOpReq(value) {
        this.opReq = value;
    }

    getTheaterOfOp() {
        return this.theaterOfOp;
    }

    setTheaterOfOp(value) {
        this.theaterOfOp = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ContractedProductVariantAtOperatingLocationType");
    }
};
