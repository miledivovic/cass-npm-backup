
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class Organization extends EcRemoteLinkedData {
    orgId;
    name;
    docs;
    rmks;
    uid;
    crud;

    getOrgId() {
        if (this.orgId == null) {
            this.orgId = [];
        }
        return this.orgId;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "Organization");
    }
};
