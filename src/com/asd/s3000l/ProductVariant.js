
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ProductVariant extends EcRemoteLinkedData {
    prodVarId;
    name;
    allowedProductConfigurationInterfaceRealizedBy;
    nestedPV;
    bkdns;
    orgInfos;
    docs;
    rmks;
    uid;
    crud;

    getProdVarId() {
        if (this.prodVarId == null) {
            this.prodVarId = [];
        }
        return this.prodVarId;
    }

    getName() {
        if (this.name == null) {
            this.name = [];
        }
        return this.name;
    }

    getAllowedProductConfigurationInterfaceRealizedBy() {
        if (this.allowedProductConfigurationInterfaceRealizedBy == null) {
            this.allowedProductConfigurationInterfaceRealizedBy = [];
        }
        return this.allowedProductConfigurationInterfaceRealizedBy;
    }

    getNestedPV() {
        if (this.nestedPV == null) {
            this.nestedPV = [];
        }
        return this.nestedPV;
    }

    getBkdns() {
        return this.bkdns;
    }

    setBkdns(value) {
        this.bkdns = value;
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

    Bkdns = class Bkdns {
        bkdn;

        getBkdn() {
            if (this.bkdn == null) {
                this.bkdn = [];
            }
            return this.bkdn;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ProductVariant");
    }
};
