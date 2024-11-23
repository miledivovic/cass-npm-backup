

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class AllowedProductConfigurationByConfigurationIdentifier extends EcRemoteLinkedData {
    prodConfId;
    authToOp;
    nestedPC;
    orgInfos;
    docs;
    rmks;
    uid;
    crud;

    getProdConfId() {
        return this.prodConfId;
    }

    setProdConfId(value) {
        this.prodConfId = value;
    }

    getAuthToOp() {
        return this.authToOp;
    }

    setAuthToOp(value) {
        this.authToOp = value;
    }

    getNestedPC() {
        if (this.nestedPC == null) {
            this.nestedPC = [];
        }
        return this.nestedPC;
    }

    getOrgInfos() {
        return this.orgInfos;
    }

    setOrgInfos(value) {
        this.orgInfos = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "AllowedProductConfigurationByConfigurationIdentifier");
    }
};
