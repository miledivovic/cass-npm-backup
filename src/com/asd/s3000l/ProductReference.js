
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ProductReference extends EcRemoteLinkedData {
    prodId;
    uidRef;

    getProdId() {
        return this.prodId;
    }

    setProdId(value) {
        this.prodId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ProductReference");
    }
};
