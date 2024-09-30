

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ContractedProductVariant extends EcRemoteLinkedData {
    qty;
    block;
    prodVarRef;
    user;
    atOpLocType;
    atOpLoc;
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

    getBlock() {
        if (this.block == null) {
            this.block = [];
        }
        return this.block;
    }

    getProdVarRef() {
        return this.prodVarRef;
    }

    setProdVarRef(value) {
        this.prodVarRef = value;
    }

    getUser() {
        if (this.user == null) {
            this.user = [];
        }
        return this.user;
    }

    getAtOpLocType() {
        if (this.atOpLocType == null) {
            this.atOpLocType = [];
        }
        return this.atOpLocType;
    }

    getAtOpLoc() {
        if (this.atOpLoc == null) {
            this.atOpLoc = [];
        }
        return this.atOpLoc;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ContractedProductVariant");
    }
};
