
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OrganizationAssignment extends EcRemoteLinkedData {
    orgRole;
    orgRef;
    docs;
    rmks;
    applic;
    uid;
    crud;

    getOrgRole() {
        return this.orgRole;
    }

    setOrgRole(value) {
        this.orgRole = value;
    }

    getOrgRef() {
        return this.orgRef;
    }

    setOrgRef(value) {
        this.orgRef = value;
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

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "OrganizationAssignment");
    }
};
