
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class PartAsDesignedPartsListEntry extends EcRemoteLinkedData {
    qty;
    rfd;
    posId;
    repl;
    rly;
    partRef;
    substPart;
    apcEfys;
    docs;
    rmks;
    uid;
    crud;

    getQty() {
        return this.qty;
    }

    setQty(value) {
        this.qty = value;
    }

    getRfd() {
        return this.rfd;
    }

    setRfd(value) {
        this.rfd = value;
    }

    getPosId() {
        if (this.posId == null) {
            this.posId = [];
        }
        return this.posId;
    }

    getRepl() {
        return this.repl;
    }

    setRepl(value) {
        this.repl = value;
    }

    getRly() {
        if (this.rly == null) {
            this.rly = [];
        }
        return this.rly;
    }

    getPartRef() {
        return this.partRef;
    }

    setPartRef(value) {
        this.partRef = value;
    }

    getSubstPart() {
        if (this.substPart == null) {
            this.substPart = [];
        }
        return this.substPart;
    }

    getApcEfys() {
        return this.apcEfys;
    }

    setApcEfys(value) {
        this.apcEfys = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "PartAsDesignedPartsListEntry");
    }
};
