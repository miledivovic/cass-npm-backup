
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class UserOfContractedProductVariant extends EcRemoteLinkedData {
    orgRef;
    customerCxt;
    uid;
    crud;

    getOrgRef() {
        return this.orgRef;
    }

    setOrgRef(value) {
        this.orgRef = value;
    }

    getCustomerCxt() {
        return this.customerCxt;
    }

    setCustomerCxt(value) {
        this.customerCxt = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "UserOfContractedProductVariant");
    }
};
