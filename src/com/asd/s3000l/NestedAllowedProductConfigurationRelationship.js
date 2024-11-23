
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class NestedAllowedProductConfigurationRelationship extends EcRemoteLinkedData {
    hwConfPartRef;
    prodConfRef;
    rmks;
    uid;
    crud;

    getHwConfPartRef() {
        return this.hwConfPartRef;
    }

    setHwConfPartRef(value) {
        this.hwConfPartRef = value;
    }

    getProdConfRef() {
        return this.prodConfRef;
    }

    setProdConfRef(value) {
        this.prodConfRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "NestedAllowedProductConfigurationRelationship");
    }
};
