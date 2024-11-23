

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ContractContext extends EcRemoteLinkedData {
    projRef;
    uid;
    crud;

    getProjRef() {
        return this.projRef;
    }

    setProjRef(value) {
        this.projRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ContractContext");
    }
};
