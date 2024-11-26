
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ProductVariantReference extends EcRemoteLinkedData {
    prodId;
    prodVarId;
    uidRef;

    getProdId() {
        return this.prodId;
    }

    setProdId(value) {
        this.prodId = value;
    }

    getProdVarId() {
        return this.prodVarId;
    }

    setProdVarId(value) {
        this.prodVarId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ProductVariantReference");
    }
};
