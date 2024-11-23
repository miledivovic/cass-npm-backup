
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class AllowedProductConfigurationByConfigurationIdentifierReference extends EcRemoteLinkedData {
    prodId;
    prodVarId;
    prodConfId;
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

    getProdConfId() {
        return this.prodConfId;
    }

    setProdConfId(value) {
        this.prodConfId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "AllowedProductConfigurationByConfigurationIdentifierReference");
    }
};
