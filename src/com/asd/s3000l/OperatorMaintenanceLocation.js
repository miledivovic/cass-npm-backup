
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OperatorMaintenanceLocation extends EcRemoteLinkedData {
    orgRef;
    uid;
    crud;

    getOrgRef() {
        return this.orgRef;
    }

    setOrgRef(value) {
        this.orgRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "OperatorMaintenanceLocation");
    }
};
