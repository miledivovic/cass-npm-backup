
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class NestedProductVariantRelationship extends EcRemoteLinkedData {
    prodVarRef;
    rmks;
    uid;
    crud;

    getProdVarRef() {
        return this.prodVarRef;
    }

    setProdVarRef(value) {
        this.prodVarRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "NestedProductVariantRelationship");
    }
};
